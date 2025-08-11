---
layout: post
title:  "Paper review: Software Testing Research Challenges: An Industrial Perspective"
date:   2025-02-27 00:00:00 +0300
author: "Oleksandr Romanov"
description: "An overview of the current state of software testing and open research questions"
summary: "An overview of the current state of software testing and open research questions"
tags: [testing, ai, engineering, review]
categories: [review]
---

A few years ago, I published a few reviews of research papers ([1](https://testengineeringnotes.com/posts/2021-05-31-paper-review-1/) and [2](https://testengineeringnotes.com/posts/2021-06-21-paper-review-2/)).

Since then, I have started reading many more papers, so I want to establish a series of posts reviewing the most interesting papers on testing, blockchain, and distributed systems. 

I will cover my motivation for reading papers in a separate post.

In this post, I want to review the fascinating paper ["Software Testing Research Challenges: An Industrial Perspective"](https://ieeexplore.ieee.org/document/10132192) by Nadia Alshahwan, Mark Harman, and Alexandru Marginean. 

# What is this research paper about?

"Software Testing Research Challenges: An Industrial Perspective" describes the current state of research in software testing (a part of software engineering). The authors share their views on the challenges and open questions that can be potentially further researched.

There are three big areas of research:
- software test generation
- automated repair and improvement
- automated transplantation and refactoring

Let's see the main ideas behind each of them.

## Test generation

Speaking of **regression testing**, some papers and tools focus on functional correctness and reliability. But what we lack is research on performance regressions. Such regressions are tricky because of their non-deterministic nature. Even if some threshold is set, performance measurements can fluctuate over time. 

Most people think that **unit tests** are easier to write and execute. But they are the most brittle—there is a constant need to refactor and rewrite them each time the underlying code changes. Some modern tools can generate unit tests for a given piece of code as a solution to this problem. 
First, we need to investigate and compare those tools' efficiency. Second, we need to investigate how to generate better mocks automatically. 

The open question is how to find optimal efficiency and effectiveness in **end-to-end tests**. Each organization needs to understand the return on investment in such tests. 

**Mutation testing** has become a more widespread topic among researchers in recent years. The main reason is that mutation tests tend to produce better coverage than other methods, like branch or statement coverage. 
The interesting topics for research in the field of mutation testing are: delta mutants (constructed for specific software change), long-standing mutants (to improve the effectiveness of the method), and mutation-based test generation (generating modifications for a particular hard-to-detect part of an application).

An interesting area of research is **test effectiveness**. We need approaches or tools to answer the following questions:

> What would have happened in production were this test not caught sooner?

> What would have been the cost of fixing a bug had it been found later in the development life-cycle?

## Automated repair and improvement

Many approaches to test generation and improvement require many repeated executions. This leads to a **build time problem**, as software build times can last hours. We need better ways to improve without the need for system rebuilds. 

Given that the most realistic test results come from **A/B testing**, the industry needs to come up with more intelligent actions to replicate production systems. Simulation-based testing can be a key solution here. 

The topic of **software measurements** is hard (as always):
- at one side, we need to compose multiple software measurements to satisfy different stakeholders
- at the other side, metrics selection should evolve together with the evolution of the product
- metrics should not target only the code - user-facing metrics are also crucial. The big question is how to find a correlation between low-level and high-level metrics (for user experience)

## Automated transplantation and pattern-based refactoring

With modern tools, **refactoring** low-level pieces of code is much simpler nowadays. The next step is to devise an approach for refactoring at a higher level of abstraction.

**Automated software transplantation** happens when a software engineer transplants the feature from one system (donor) to another (host). Such a process can and should be automated (ideally at the highest level possible). However, transplantation adds new challenges to testing. We need to check that no regression on the system has occurred by comparing how the feature works at both donor and host systems.

## How artificial intelligence can help in software testing

AI can do many things:

1. It can update the existing set of test cases, expand it, and even maintain the coding styles
2. It can help test case selection and prioritization (based on code changes)
3. It can suggest code fixes and even performance improvements

# Conclusion

This paper brilliantly compiles the most critical open questions in modern software testing and engineering. It clearly shows the industry's current state and how AI-based solutions change the landscape every day. 

The paper's examples show that the software testing industry is part of software engineering and can be solved with concrete, practical solutions (not just theoretical ones).

But despite the current advancements, we have plenty of opportunities and topics to research and experiment with. 

