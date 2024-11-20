---
layout: post
title:  "On interview tasks for the test automation engineer"
date:   2024-01-27 00:00:00 +0300
author: "Oleksandr Romanov"
description: "My thoughts on different interview tasks for automation engineer"
summary: "My thoughts on different interview tasks for automation engineer"
tags: [testing, automation, interview]
categories: [testing]
cover:
  image: img/20240127/interviewtasks.png
  alt: "interviewtasks"
lang: ua
---

Picture by [ChatGPT](https://chat.openai.com/)

# On interview tasks for the test automation engineer 
  
In one of the testing communities, we discussed which test tasks you can get at the test automation interview.
In my career, I have been an interviewer and interviewee. I'd like to share my experience with it. 
*(Next time, we will talk about how you can prepare for such interviews)*

## Interview tasks

1. LeetCode'ish tasks on algorithms and data structures. If it is the first round of interviews - it can be up to 3 small tasks for 30 - 60 minutes. If it is further rounds - tasks can be much more complex. Additionally, the interviewer can adjust requirements as you solve the task.
2. A task: "*Write a service and cover it with tests.*" Here, an interviewer wants to check your developer skills and how much experience you have with testing tools of the particular framework.
3. A task: "*Here is a piece of code - tell us what it does and where it can potentially fail.*" Here, an interviewer checks your code-reviewing skills and knowledge of the pitfalls of the chosen programming language.
4. A task "*Write UI or API tests from scratch. Here is API sandbox or some test site*". Here, the best approach is to have a set of template automation projects with technologies like those you mentioned in your CV. It will increase your speed of creating a solution. You can quickly fail such an interview if you touched this library or framework long ago (or your automation experience was only copy-pasting other BDD scenarios).

### A note
Some interviews concentrate only on your skill of sitting at your desk and solving typical algorithmic cases day by day. But it is only one side of the coin. Such interviews do not check a candidate's thoughts, chosen automation approaches, or experiences with solving actual work assignments.

## Take-home tasks
- "*Cover this functionality with automated tests.*" Sometimes, you should also write a test strategy or a test plan for a feature.
- "*Here is a repository with automated tests. Analyze it, fix issues, and describe what else can be improved and why*". It is one of the best types of homework you can get because it allows you to show the full spectrum of your skills without the pressure of the interview and time.

### Another note

**It is better to make fewer tests but to make them work, add an automatic execution on GitHub CI, test reports, and other valuable things. Remember that a clean and understandable README can add you many points.**

You are likelier to fail the interview if you have a fancy automation solution with all the bells and whistles, but nobody can use it and even build it locally.


**Which types of automation tasks have you get more often?**