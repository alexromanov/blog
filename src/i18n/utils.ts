/* global URL */
/**
 * i18n utilities.
 *
 * Routing rules:
 *  - EN is the default locale and serves at the URL root with NO prefix.
 *  - FR is served under `/fr/...`.
 *
 * Source-of-truth: `src/config.ts` -> SITE.locales / SITE.defaultLocale.
 */

import { SITE, type Locale } from '../config';
import { messages, type UIKey } from './ui';

const DEFAULT_LOCALE: Locale = SITE.defaultLocale;

/** Configured base path (no trailing slash). E.g. '/chirping-astro' or ''. */
const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/**
 * Prefix an absolute path with the configured `base`. Safe to call with
 * already-prefixed paths (it won't double up) or with empty/relative
 * paths (returned unchanged).
 */
export function withBase(path: string): string {
  if (!path || !path.startsWith('/')) return path;
  if (!BASE) return path;
  if (path === BASE || path.startsWith(`${BASE}/`)) return path;
  return `${BASE}${path}`;
}

/** Returns the leading locale prefix or '' for the default locale. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/**
 * Build a localized URL for the given pathname (without locale prefix).
 *
 *   localizedPath('/posts/foo', 'en') -> '/posts/foo'
 *   localizedPath('/posts/foo', 'fr') -> '/fr/posts/foo'
 *   localizedPath('/', 'fr')          -> '/fr/'
 *
 * The configured `base` (e.g. `/chirping-astro`) is automatically
 * prefixed when set.
 */
export function localizedPath(path: string, locale: Locale): string {
  const cleaned = path.startsWith('/') ? path : `/${path}`;
  const localized =
    locale === DEFAULT_LOCALE ? cleaned : cleaned === '/' ? `/${locale}/` : `/${locale}${cleaned}`;
  return withBase(localized);
}

/**
 * Detect the current locale from a URL or Astro.url.pathname.
 * Anything starting with `/fr` or `/fr/` resolves to 'fr'; otherwise
 * the default locale is returned.
 */
export function detectLocale(pathname: string): Locale {
  const p = stripBase(pathname);
  for (const locale of SITE.locales) {
    if (locale === DEFAULT_LOCALE) continue;
    if (p === `/${locale}` || p.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return DEFAULT_LOCALE;
}

/** Strip the configured base path prefix from a pathname. */
function stripBase(pathname: string): string {
  if (!BASE) return pathname;
  if (pathname === BASE) return '/';
  if (pathname.startsWith(`${BASE}/`)) return pathname.slice(BASE.length);
  return pathname;
}

/**
 * Strip the locale prefix from a pathname so it can be relocalized.
 *
 *   stripLocale('/fr/posts/foo')  -> '/posts/foo'
 *   stripLocale('/posts/foo')     -> '/posts/foo'
 *   stripLocale('/fr')            -> '/'
 */
export function stripLocale(pathname: string): string {
  const p = stripBase(pathname);
  for (const locale of SITE.locales) {
    if (locale === DEFAULT_LOCALE) continue;
    if (p === `/${locale}` || p === `/${locale}/`) return '/';
    if (p.startsWith(`/${locale}/`)) return p.slice(`/${locale}`.length);
  }
  return p;
}

/**
 * Translation helper. Returns the localized string for the given key,
 * falling back to the default locale, then to the key itself.
 *
 *   const t = useTranslations('fr');
 *   t('nav.home') // 'Accueil'
 */
// eslint-disable-next-line no-unused-vars
export function useTranslations(locale: Locale): (key: UIKey) => string {
  return function t(key: UIKey): string {
    const dict = messages[locale] ?? messages[DEFAULT_LOCALE];
    return dict[key] ?? messages[DEFAULT_LOCALE][key] ?? key;
  };
}

/** Default date shape used by `formatDate` / `formatDateTime`. */
const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

/** Time shape appended to a date when the date carries a time of day. */
const TIME_OPTIONS: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };

function toDate(date: Date | string): Date | null {
  const d = typeof date === 'string' ? new Date(date) : date;
  return Number.isNaN(d.getTime()) ? null : d;
}

function intlLang(locale: Locale): string {
  return locale === 'fr' ? 'fr-FR' : 'en-US';
}

/**
 * True when a frontmatter date carries a meaningful time of day.
 *
 * A date-only `pubDate: 2026-07-28` is coerced to *exactly* midnight UTC by
 * the content schema, so "midnight UTC" is the sentinel for "the author never
 * wrote a time". Authors opt a post into time rendering by writing one:
 * `pubDate: 2026-07-28T14:30:00` (YAML reads a bare time as UTC; add an
 * explicit `+03:00`/`Z` offset to be unambiguous).
 */
export function hasTime(date: Date | string): boolean {
  const d = toDate(date);
  if (!d) return false;
  return d.getUTCHours() !== 0 || d.getUTCMinutes() !== 0 || d.getUTCSeconds() !== 0;
}

/**
 * Zone a value is rendered in.
 *
 * A date-only `pubDate: 2026-07-28` is a *calendar date* that the schema stores
 * as midnight UTC — it is not an instant, so it renders in UTC. Rendering it in
 * a zone behind UTC would print the previous day. Values that carry a real time
 * are true instants and render in `SITE.timeZone`.
 */
function zoneFor(d: Date): string {
  return hasTime(d) ? SITE.timeZone : 'UTC';
}

/** `YYYY-MM-DD` (en-CA formats numerically in ISO order). */
function isoDatePart(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: zoneFor(d),
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

/** `HH:mm` (24h) in `SITE.timeZone`. */
function isoTimePart(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: SITE.timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(d);
}

/**
 * Locale-aware date formatter. Renders in a pinned zone (see `zoneFor`) so the
 * output never shifts with the build machine's zone; a caller may override it.
 */
export function formatDate(
  date: Date | string,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = DATE_OPTIONS,
): string {
  const d = toDate(date);
  if (!d) return '';
  if (SITE.isoDates) return isoDatePart(d);
  return new Intl.DateTimeFormat(intlLang(locale), { timeZone: zoneFor(d), ...options }).format(d);
}

/**
 * Same as `formatDate`, plus the time of day — but only for posts that
 * actually carry one (see `hasTime`) and only while `SITE.showPostTime` is on.
 * Date-only posts fall through to `formatDate` unchanged.
 */
export function formatDateTime(
  date: Date | string,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = DATE_OPTIONS,
): string {
  const d = toDate(date);
  if (!d) return '';
  if (!SITE.showPostTime || !hasTime(d)) return formatDate(d, locale, options);
  if (SITE.isoDates) return `${isoDatePart(d)} ${isoTimePart(d)}`;
  return new Intl.DateTimeFormat(intlLang(locale), {
    timeZone: zoneFor(d),
    ...options,
    ...TIME_OPTIONS,
  }).format(d);
}

/** Full ISO 8601 timestamp used for <time datetime="..."> attributes. */
export function isoDate(date: Date | string): string {
  const d = toDate(date);
  return d ? d.toISOString() : '';
}

/**
 * Map a "logical" path through every supported locale to power
 * <link rel="alternate" hreflang="..."> SEO tags.
 *
 * `pathWithoutLocale` should be the canonical path WITHOUT locale prefix
 * (e.g. '/posts/welcome' for both EN and FR). Pass `availableLocales` to
 * limit the output to a subset (e.g. when a post has no translation
 * sibling in another locale).
 */
export function alternates(
  pathWithoutLocale: string,
  availableLocales?: readonly Locale[],
): Array<{
  locale: Locale | 'x-default';
  href: string;
}> {
  const locales = (availableLocales ?? SITE.locales) as readonly Locale[];
  const list: Array<{ locale: Locale | 'x-default'; href: string }> = locales.map((locale) => ({
    locale,
    href: new URL(localizedPath(pathWithoutLocale, locale), SITE.url).toString(),
  }));
  // x-default points at the default locale only when it's actually
  // available for this path; otherwise drop it.
  if (locales.includes(DEFAULT_LOCALE)) {
    list.push({
      locale: 'x-default',
      href: new URL(localizedPath(pathWithoutLocale, DEFAULT_LOCALE), SITE.url).toString(),
    });
  }
  return list;
}

/** Compute the canonical URL for a localized path. */
export function canonicalUrl(pathname: string): string {
  return new URL(pathname, SITE.url).toString();
}

/** Pretty label for the language switcher. */
export function localeLabel(locale: Locale): string {
  switch (locale) {
    case 'fr':
      return 'Français';
    case 'en':
    default:
      return 'English';
  }
}

/** ISO BCP 47 language tag for `<html lang>` and date formatters. */
export function htmlLang(locale: Locale): string {
  switch (locale) {
    case 'fr':
      return 'fr-FR';
    case 'en':
    default:
      return 'en-US';
  }
}
