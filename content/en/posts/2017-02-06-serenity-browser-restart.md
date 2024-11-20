---
layout: post
title:  "The one where browser suddenly restarts with Serenity"
date:   2017-02-06 09:09:47 +0300
author: "Oleksandr Romanov"
description: "In the following post I will share a quick tip which helps with resolving browser restart issue in Serenity framework"
summary: "In the following post I will share a quick tip which helps with resolving browser restart issue in Serenity framework"
tags: [bdd, serenity]
categories: [automation]
lang: en
---

_In this short post I will share a quick tip which helps with resolving browser restart issue in Serenity framework_ 

**Target audience:** QA Automation engineers

### What is the Serenity framework?

Recently, I have returned to UI test automation with Selenium WebDriver. In our team of test automation engineers we decided to use a framework called Serenity and JBehave as a BDD tool. 

What is Serenity?  
[Serenity][Serenity] (former Thucydides) - is a full-featured framework for writing UI based Selenium tests as well as REST tests. It has many interesting features, such as powerfull reporting system, good integration with BDD tools (Cucumber/JBehave), helpful wrappers for WebDriver's WebElement and some others.   

As for [JBehave][JBehave]  - it is in some point looks similar to Cucumber, but has the slight differences and more ways to be configured.  

The purpose of the post is not in describing framework (as itself has a beautiful [reference][Serenity reference]), but in providing the helpful tip on issue that our team has found during upgrading Serenity libraries in our solution. I also assume, that the readers have some experience with Serenity and JBehave tools.  

### So, what was the problem?  

Before the upgrade of Serenity core dependency from 1.1.x version to 1.2.x version, our tests were run in a single browser and used the same browser instance between each story, scenario and even example.  

But after upgrading [serenity-core][serenity-core] to 1.2.2, [serenity-jbehave][serenity-jbehave] to 1.21.0 and [jbehave-core][jbehave-core] to 4.1 - the scenarios started to behave differenly. Firefox browser began to restart not only after each scenario, but even after each example within a single scenario.  

### Long way to the top  

Setting **serenity.use.unique.browser=false** and **restart.browser.each.scenario=false** properties did not help to resolve the issue - the tests continued to restart the browser.

After some debugging, the next things have been revealed:  
 - *BaseStepListener* class which implements *StepListener* interface has been added in 1.2.x version;  
 - It is possible to write your own implementation of *StepListener* interface or use *BaseStepListener*;  
 - *BaseStepListener* has a *CloseBrowser* class, which has a functionality to close browser depending on current configuration;  
 - Configuration for browser restart is implemented via *RestartBrowserForEach* enum;  

Finally it was discovered, that if **serenity.restart.browser.for.each** property is set to "NEVER" value then Serenity restarts browser based on this setting. Another possible values of setting are: FEATURE, STORY, SCENARIO and EXAMPLE.  

### Conclusion
As **serenity.restart.browser.for.each** property is not described in Serenity reference, it is useful to know about it's existence. And of course - it is always helpful to do some debugging and investigating on how exactly the chosen frameworks are implemented :).   

[Serenity]: http://www.thucydides.info/#/
[Jbehave]: http://jbehave.org/
[Serenity reference]: http://serenity-bdd.info/docs/serenity/
[serenity-core]: https://mvnrepository.com/artifact/net.serenity-bdd/serenity-core
[serenity-jbehave]: https://mvnrepository.com/artifact/net.serenity-bdd/serenity-jbehave
[jbehave-core]: https://mvnrepository.com/artifact/org.jbehave/jbehave-core
