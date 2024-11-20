---
layout: post
title:  "Why are we testing?"
date:   2024-01-18 00:00:00 +0300
author: "Oleksandr Romanov"
description: "Thoughts on why we do software testing"
summary: "Thoughts on why we do software testing"
tags: [testing]
categories: [testing]
cover:
  image: img/20240118/whywetest.png
  alt: "whywetest"
lang: ua
---

Picture by [ChatGPT](https://chat.openai.com/)

# Why are we testing?

The main goal of testing - is to **provide** the team (management) with **information on the current state of the product** (build) and **on** possible **risks for release**. It is up to the management to decide what to do with this information and how to act.

## Same with automated tests

Your automated tests (ideally) should "tell a story" - provide information about the product quality using language that your manager would understand. 
If it is hard to do - think about how to add test reports for yourself (to track results) and also - how to add a separate report for a manager - with an appropriate level of scale.

## Always remember
- Your manager doesn't wanna know how many tests you've executed. The manager wants to know how much time is left for testing and how many critical bugs we have in which component
- Your manager doesn't care much about fancy automation frameworks or the latest coding patterns. The manager cares about getting fast, reliable, and understandable feedback from an automated test run
- Your manager doesn't wanna know how much effort it takes to configure the environment. The manager wants to know your suggestions on how to make this long process more automated and fast. And how a manager can help you with that (time or expertise)

So **testing - is not only about "executing tests" or "writing automated test code"**. Testing is about **exploring** the **product**, **detecting** possible **risks**, and **providing** valuable **information** **on time**.