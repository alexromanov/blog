---
layout: post
title:  "50 shades of Fibonacci - Solving popular interview question"
date:   2024-09-24 00:00:00 +0300
author: "Oleksandr Romanov"
description: "Multiple approaches to solve popular interview question"
summary: "Multiple approaches to solve popular interview question"
tags: [python, interview]
categories: [python]
cover:
  image: img/20240924/fibonacci.png
  alt: "fibonacci"
---

Photo by [David Clode on Unsplash](https://unsplash.com/@davidclode?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

# What is Fibonacci sequence?

Fibonacci numbers come from [mathematics](https://en.wikipedia.org/wiki/Fibonacci_sequence). It is a sequence where each number is the sum of the two preceding numbers. Fibonacci sequence usually starts with 0 and 1, but some author can start it from 1. 

General formula for the sequence is the following:

`F(n) = F(n-1) + F(n-2)`,  

where `F(0) = 0` and `F(1) = 1`

# Fibonacci at the interview

Variations of Fibonacci sequence questions are very popular at the interviews. Specifically for test automation engineers. The reason is that the task is not hard at all, but there are multiple solutions to it. Each solution can show your understanding of the language and different programming concepts. 

In this post I will show you how to solve `Nth number of Fibonacci sequence` using Python. 

**Before going straight to solutions - try to solve it by yourself for practice.**

# Approaching the problem

## 1. Naive solution

The simplest and most naive approach - code like we see it in the formula. Let's use recursion here:

```python
def fib(n: int) -> int:
    return fib(n-1) + fib(n-2)
```
Solution seems fine, but it can lead to `RecursionError: maximum recursion depth exceeded` error.

## 2. Improved naive solution

We can improve previous solution, by taking care on the basic cases:

```python
def fib(n: int) -> int:
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
```

## 3. Memoization

Another way to solve the problem - is to use [memoization](https://www.geeksforgeeks.org/memoization-1d-2d-and-3d/) technique. In this case we are memorizing intermediate results, instead of calculating it on and on:

```python
from typing import Dict

memo: Dict[int, int] = {0: 0, 1: 1}
def fib(n: int) -> int:
    if n not in memo:
        memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]
```

## 4. Native Python memoization

It turns out that Python has built-in tools for memoization. Import `lre_cache` from `functools`:

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
```

## 5. Loops

Fibonacci sequence is a famous example of using recursion. But recursion can be substituted with simple Python loops:

```python
def fib(n: int) -> int:
    if n == 0:
        return n
    last: int = 0
    next: int = 1
    for _ in range(1, n):
        last, next = next, last + next
    return next
```

## 6. Generators

Another approach to solve a problem is to generate Fibonacci number using Python generators. 

First, define generator:

```python
def fib_gen():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b
```

Then - use it to get a number:

```python
def fib(n):
    gen = fib_gen()
    for _ in range(n):
        num = next(gen)
    return num
```

# Conclusion

As you can see, there are multiple way to solve a Fibonacci sequence problem. 

Why do we need to learn many ways to solve one problem? 

As a answer, I will provide a quote by Scott H. Young from "Ultralearning" book:
> One thing that separate mediocre developers from great ones isn't the range of problems they can solve but that the latter often know dozens of ways to solve problems and can select the best one for each situation. 

