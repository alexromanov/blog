---
title: 'Book Review: Contract Testing in Action'
description: 'Review of "Contract Testing in Action: With Pact, PactFlow, and GitHub Actions" book written by Marie Cruz and Lewis Prescott'
pubDate: 2026-05-13
tags: [book, testing, contract-testing]
categories: [Reviews]
translationKey: contract-testing-book-review
toc: true
heroImage: ../../../assets/images/posts/20260513/ctia-book.png
heroAlt: 'Contract vs E2E tests graph from Contract Testing in Action book'
---

## You have done everything right, but still have bugs

Hello, fellow test engineer. Or a software engineer who values quality. 
I suppose you work on a large and complex product. 

On the backend, you have dozens or even hundreds of micro (or not so micro) services talking to each other.

Some services communicate via HTTP REST calls. Some services publish messages in a queues. You have web clients, but there are also some plans to add mobile clients to the backend. 

As a responsible engineer, you decided that you need to catch "all the bugs". 
Industry standards tell you that you need ... a pyramid. You need a large portion of unit tests, a smaller number of integration tests (whatever integration means to you), and a few UI end-to-end tests on top. 

As time goes by, you add all the tests. CI is green. Your manager is happy. Hooray! 

But the more features you have, the stranger things happen. Even with the huge amount of tests and decent coverage, you still have bugs. 

Something is definitely wrong. 

You still have bugs. More than that - these are integration bugs. Bugs that happen when you try to integrate your service with another team's service. Or - with the third-party service. 

Then, the realization comes: you build your test based ... on assumptions. You assume that another service API call will return the expected value in the expected format. But then the reality comes into play - and assumptions become incorrect.

Other APIs are not as stable as you expected. They are also "living" things that constantly change and evolve over time. The only way to be aware of these changes is to test them in a real environment. 

That's a good way, but it is way slower and flakier than unit testing.

It turns out that unit, integration, and end-to-end tests are not enough.
This is the moment when you can think of a special kind of tests. Tests that we call - contract tests. 

If you have these kinds of problems or if you have a lot of connected parts on the backend, then **["Contract Testing in Action: With Pact, PactFlow, and GitHub Actions"](https://a.co/d/4krQsMR)** is for you!

> More about the idea of contract tests, you can find [at one of my previous posts](https://testengineeringnotes.com/posts/2021-07-12-should-you-use-contract-testing).  

## Contract testing back in 2017

When I started exploring the topic back in 2017, there were a limited number of resources. In fact, it was only two:
- [Microservices testing](https://martinfowler.com/articles/microservice-testing/) slides by Toby Clemson at Martin Fowler's blog
- [Spring Cloud Contract](https://spring.io/projects/spring-cloud-contract) documentation

> [Pact](https://docs.pact.io/) was only at the start at that time ...

The rest you needed to figure out by trial and error on your own.

Now, you have a book. So what about it?

## Reasons to read

Let me give you a few reasons why **["Contract Testing in Action: With Pact, PactFlow, and GitHub Actions"](https://a.co/d/4krQsMR)** is worth reading.

### Illustrative intro to contracts

The book gives you a gradual introduction to contract testing. It starts from an idea and leads to the place of contract testing within the test levels of the modern applications. Marie and Lewis provide you with a lot of examples and beautiful illustrations. 

Illustrations are what help you to grasp contract testing concepts and processes. It can be hard to explain the whole process just in words, so diagrams do this work well. 

### Variety of examples

The book has a nice blend of theory and practice. 

As soon as you learn the first concepts, you will have examples of contracts and tests for consumers and producers for multiple types of applications and APIs. 

- Web and Mobile clients
- HTTP REST and GraphQL APIs
- Even-driven systems

### Guide to integration

The book shows more than just examples of tests. It provides a way to integrate contract testing tools into your CI/CD process. This is an important step, because without CI integration - these tests can be left as a "nice but complex proof-of-concept" for many organizations.

Also, I really liked a step-by-step tutorial on how to turn a portion of your integration or end-to-end tests into contract tests. You will need to do these kinds of tasks when you integrate contract tests in the toolset and process.

> P.S. All code examples are available on GitHub - so you can grab them and use as a starting point for your exploration!

## Reasons to skip

Let me put a few reasons why you may skip this book, and that will be totally ok:

1. You don't have microservices or any sort of services on the backend. You have a huge monolithic system that does not communicate with any third-party service

2. You have microservices, but are heavily invested in Spring and Spring Boot frameworks. The book shows examples using [Pact](https://docs.pact.io/) tool, so it may be not applicable to Spring ecosystem. Try [Spring Cloud Contract](https://spring.io/projects/spring-cloud-contract) instead.

3. You just started your way in software testing and are not involved in coding and automation. Do not worry - explore the world of testing, learn technologies and tools. You can get back to the book in a while. 

4. You have microservices, but you do not have unit, integration, and end-to-end test coverage at all. In this case, you may need to add them first before introducing contract testing. (Nothing actually stops you from adding Pact from day one, but you need to provide clear evidence of why contract tests are better than the other ones)

## Conclusion

So far, **["Contract Testing in Action: With Pact, PactFlow, and GitHub Actions"](https://a.co/d/4krQsMR)** is the best and only book on contract testing on the market. 

Be aware that this book is not for complete beginners. It requires some knowledge of systems, APIs and Javascript. 

But for experienced engineers it offers a good amount of practical and actionable information. I can recommend it both for testers and developers.

Thank you, Marie Cruz and Lewis Prescott for writing this book. 
