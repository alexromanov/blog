---
title: 'One simple step to use AI more effectively as a tester'
description: 'One forgotten aspect of using AI for testing and learning'
pubDate: 2026-01-10
tags: [learning, ai]
categories: [Testing]
translationKey: automation-framework-solution
toc: true
---

## How we use AI

Many of us nowadays use AI tools in one way or another. It can be AI agents, "smart" code/test generation, code reviews, or documentation.

We "google" a lot less and even [Stack Overflow reports low user activity](https://devclass.com/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help/). A completely separate question is where it brings AI. AI for coding is learning by using the correct answers from Stack Overflow. If there is no new information about the latest technologies, languages, frameworks, the effectiveness of AI can drop. Unless it will learn from some other reliable source.

But another problem is **how software testers use AI now**. For many of us, **_AI looks like a magic prediction ball that answers our questions_**. But are these answers correct and complete? How can we find it out? Especially, when you are learning new concepts from a new domain, such as automation, programming, or a shiny new instrument that _"will eliminate manual testing once again"_.

## Knowledge vs. Understanding

But before we assess the quality of the answers, let's concentrate on two important terms: knowledge and understanding.

**Knowledge** is a structured, searchable representation of the facts, rules, or descriptions of the world. **AI actually gives us ... the knowledge** as a response to some of our prompts. (But how reliable are they?). Knowledge answers the questions "what it is", "how this process goes in nature".

**Understanding** is the extent to which we can use knowledge to model and explain reality. Moreover, understanding is our ability to build cause-and-effect relationships and predict how a system or process will behave when conditions change. **Understanding is not just a collection of random facts.**

## The "ease" that AI gives us

Before the emergence of AI agents and chats, when someone did not know something, it was more or less obvious. But with AI, we can observe the rise of **fake competence**.

Anybody can write prompts, such as "Write me a Playwright framework for a web app" or "Give me some tests or a test strategy for a given specification". Any person can do it and get a quick response.

But without understanding, this person can't explain why automated tests did not pass, why they chose a given approach or tool, or what happens if the system behaves this way or that way. You can feel this when you first do a vibe coding session with a completely new programming language or framework.

AI can easily throw a bunch of facts or "average correct" information at a tester. For example, a blockchain can be viewed as a database, a distributed system, or a consensus mechanism. AI can also throw around terms like hashing, digital signatures, ZK proofs, and others. But a person with understanding can tie these facts and concepts together and form a single coherent model of a blockchain.

## How to assess your understanding

Hopefully, there are ways to quickly assess your understanding while using an AI

- **Explain** a concept without technical jargon with your own words. (Hi, Mr. Feynman!)
- Think through all possible failure modes of the process (or in other words, what can happen if the system fails)
- **Predict** how the system or a component will behave when you change or remove the other components.Or try to think what your approach would be if a tool were not available. E.g., "What if we can't run automated tests - how can we make sure that the system is tested enough?"
- **Analyze** what happens when you run AI-generated code BEFORE you actually run it. Then - compare results and reflect on how deep is your understanding and where it provided you a false result.
- **Move** your models and ideas from one domain to a completely different domain. Use analogies (comparisons based on similarities), but use them wisely.

> A word of caution, however: teachers who employ analogies typically are aware of where the similarities end and the differences begin, but students may not have this insight. This can lead to misconceptions, such as mistakenly believing that electricity “flows” like water, which oversimplifies and distorts physical reality. (c) Dominik Tornow, Think Distributed Systems

## One step to improve understanding

The main advice for improving understanding while learning with AI is ... **_do not ask just "Explain me a term X"_**.

Use **deeper** prompts:

- Why can X fail?
- What are the trade-offs of using this approach or a tool?
- What are the common misconceptions about X?
- What are the alternatives to the approach?
- Explain to me a topic that I already know about it
- Compare the topic or a concept with a similar one. Provide a list of similarities.
- Act as a critic and find a weak point in the explanation

> Dig deeper. Think outside the given facts. Try to integrate those facts into your map of reality. Create your own mental models that will work in various conditions. In that case, AI will give you a boost in effectiveness in working and learning.

Otherwise, we build castles on the sand. Castles with the name "shallow understanding". Anyone can break these castles with one simple question: _Are you sure about that?_
