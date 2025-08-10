---
layout: post
title:  "On integration testing examples"
date:   2024-02-11 00:00:00 +0300
author: "Oleksandr Romanov"
description: "Few examples of integration testing from real world"
summary: "Few examples of integration testing from real world"
tags: [testing]
categories: [testing]
cover:
  image: img/20240211/integration.png
  alt: "integration"
---

Photo by [Luis Villasmil on Unsplash](https://unsplash.com/@villxsmil?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

# On integration testing examples  
  
Every test engineer should be familiar with the types of tests.  

Especially, when a tester is starting to work on test automation and is diving into the world of "fascinating geometric figures from the age of pharaohs."  
  
So, as many respected testers say, for successful automation we need to concentrate on the following types of tests:  
- **Unit testing** involves testing the smallest testable parts of an application, called units, independently and in isolation from other parts.  
- **Integration testing** focuses on testing the interfaces and interactions between integrated units/modules to expose defects in their interactions.  
- **End-to-end testing** is a technique that tests the entire software application from the start to the end along with its integration with external interfaces.  
  
Unit and end-to-end tests are more or less understandable: unit tests are more about classes and individual functions, and end-to-end tests - are for UI or an API level.  

What about integration testing? When you ask such questions in the chats or forums - you will get a thousand or more different opinions on what integration test is.  
  
Today, let me describe integration tests with the power of analogies.  
  
## Automotive (cars)
- **unit**: when the engineer checks the work of a single detail. E.g. the work of a battery in the case of electric cars.  
- **integration**: is a check of a few similar details that work together in the form of the subsystem. E.g. electrical or braking system). Other subsystems can be turned off, ignored, or mocked.  
- **end-to-end**: is a verification of whether it is possible to ride a car at all. As an end user.  
  
## Restaurants  
- **unit**: when a chef checks separate products - whether vegetables or meat is fresh or not.  
- **integration**: when a chef checks the readiness of a few products that are cooked together. Like garlic and onions to be added to another dish.  
- **end-to-end**: when a chef or a customer tries a dish. Here we can test not only the food itself but also how it was presented and served.  
  
## Books  
- **unit**: when an author re-reads the text, deletes or fixes grammatical errors at the scope of a single sentence or a paragraph.  
- **integration**: when an editor checks a single chapter of a non-finished book.  
- **end-to-end**: when a critic reads the whole book and provides a review.  
  
## Medicine  
- **unit**: when a scientist makes an experiment on a new treatment or pills at the scale of a single or a few cells.  
- **integration**: when a test is conducted at the scale of a single limb.  
- **end-to-end**: when an experimental treatment is tested on a selected group of volunteers (together with a placebo).  
  

Do **you** have some other analogies to integration testing from the real world?