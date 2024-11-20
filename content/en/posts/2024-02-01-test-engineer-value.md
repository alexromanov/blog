---
layout: post
title:  "On the value of a test engineer"
date:   2024-02-01 00:00:00 +0300
author: "Oleksandr Romanov"
description: "How we, as test engineers, bring value to the team and company"
summary: "How we, as test engineers, bring value to the team and company"
tags: [testing, automation]
categories: [testing]
cover:
  image: img/20240201/testingvalue.png
  alt: "testingvalue"
lang: en
---

Picture by [ChatGPT](https://chat.openai.com/)

# The engineers and their value
How does our daily work create value for a company?  

Generally speaking, **we** all **help users to solve** their **problems**. As soon as we stop to solve problems - there is a risk that the user will change our product to a competitor's one. 

So, our work as test engineers is outside of creating marvelous test plans or fancy automation code with many patterns. 

> We help the company achieve goals - to create customer value.

## What do developers do to create value? 

Developers **write code that works** and **write code that solves the user's problems.** 

To increase value, developers can work on the most impactful **features** and **minimize the time** it takes for a feature to get from an idea to the hands of the end user. 

## What do test engineers do to create value?

Test engineers:
- collect information about the state of the product (**exploration**)
- identify possible problems and risks (**analysis**)
- provide information to stakeholders (**reporting**)

> To increase value, the test engineers provide **understandable** information about the **most critical** features to the **right people** at the **right time**. 

The faster the tester provides information, the faster the management can make informed decisions on bug fixes and release activities. 

# On the value of the feedback

The value of the product features and the value of the information decrease over time. If a product lies down on the shelf, there is a risk that the user will not need it at all after the release. (Exceptions are deeply research products. But even for such products - we need to think about the end user personas).  

> Information about the state of the product should be provided in time. 

- That's why a lot of teams optimize their test suites to get feedback in a matter of hours. 
- That's why we use automation and automated tests. (Along with monitoring).
- That's why we use additional tools - to generate test data, capture video and screenshots, collecting logs and metrics from production.

# On the value of the code and tests

The working automated tests on your local branch have less value than the one included in a pull request. Automated tests in the code review phase - have less value than those merged to the main branch. 

But the most significant value brings the test that is not only merged - but also executed as a part of the nightly or smoke suite.

It is up to the test engineer to control how fast and efficiently they create tests or fixes. The quicker you pass the code review or collect the required information about the bug (with tools) - the better value it provides in the end. 

# On the value of test automation

**Test automation in itself does not provide value directly to the customer. Automated tests are not end-user products.** 

It is only one of the possible instruments to get information and speed up the feedback loop. Same as unit tests, CICD pipeline, or canary releases.  

> However, automated tests are internal products. The product solves the "pain" of the development team. 

That's why test engineers should constantly learn who works with automated tests, in what way, and which data automated tests provide to them. 

- managers or QA leads value test reports and coverage metrics matter the most
- developers value fast feedback and the ability to quickly pinpoint the root cause of the problem
- test engineers praise the understandability of the test code and how easy it is to extract and collect information about the problem

# How to increase your value as a test engineer
There are some things test engineer can do to increase the value:  

1. Always **think about** the information you produce and its **target audience**. Change it accordingly.
2. Learn and **optimize** your **work to** help the development team quickly **identify** problems and **resolve** release blockers.
3. **Improve** automated **tests** to make them faster and more stable.
4. **Visualize** your **work and the state of the product** for the team - create useful progress dashboards.