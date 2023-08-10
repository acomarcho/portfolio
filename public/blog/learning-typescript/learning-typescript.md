---
slug: learning-typescript
title: Learn TypeScript with Me!
summary: Here, I tell you my story and thoughts when learning TypeScript along the way. If you see this, I'm still on my learning journey, so be sure to check it often for updates!.
date: 2023-07-26
---

# What's the motivation of writing this blog?

I've been using TypeScript for a lot of my projects, but I want to really study TypeScript in-depth to solidify my programming skills. On learning new things, I usually just watch the videos and barely take notes. This blog is specifically made for me to make sure I understand the concepts that I have learned.

_This is based on Frontend Masters' TypeScript Fundamentals v3._

# Chapter 1: Why TypeScript?

It's mostly for **safety** and **linting** especially if you work in a good IDE like VS Code. It helps development by making sure things work as intended as best as it could (**do checks at compile time to avoid errors at run time**).

TypeScript is composed by three things: the language, the language server (_basically the thing that allows VS Code to show you suggestions or warn you when something goes wrong_), and the compiler.

The compiler **compiles your TypeScript** code into JavaScript code that browsers can run. What is cool is that you can specify _the JavaScript version_ you want to target! For example, if you're targetting older browsers, you can compile in ES2013, if you want it to use async-await syntax, you can compile it in ES2016. You can also change the settings of _how modules are compiled_, i.e. change from the ES2016 modules to CommonJS modules which Node supports.

In this course, I learned some things you should do when you write TypeScript code:

(1) When you initialize variables, it is **not necessary** to specify the variable type. The tutor even said that **he does not like explicitly stating types when it's obvious** like when you write `let number = 5;`

(2) There are times where you need to declare the variable first without giving it a value. This is the time where you want to explicitly state what type you want it to be.

(3) Often, in development, you'll fight hurdles like where you need to **generalize the types** as development goes on. You do this by making making a more general declaration beforehand.

(4) Always try to explicitly state the return value of functions.
