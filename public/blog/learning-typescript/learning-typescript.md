---
slug: learning-typescript
title: Learn TypeScript with Me!
summary: Here, I tell you my story and thoughts when learning TypeScript along the way. If you see this, I'm still on my learning journey, so be sure to check it often for updates!.
date: 2023-07-26
---

# What's the motivation of writing this blog?

I've been using TypeScript for a lot of my projects, but I want to really study TypeScript in-depth to solidify my programming skills. On learning new things, I usually just watch the videos and barely take notes. This blog is specifically made for me to make sure I understand the concepts that I have learned.

_This is based on Frontend Masters' TypeScript Fundamentals v3._

# Why TypeScript?

It's mostly for **safety** and **linting** especially if you work in a good IDE like VS Code. It helps development by making sure things work as intended as best as it could (**do checks at compile time to avoid errors at run time**).

TypeScript is composed by three things: the language, the language server (_basically the thing that allows VS Code to show you suggestions or warn you when something goes wrong_), and the compiler.

The compiler **compiles your TypeScript** code into JavaScript code that browsers can run. What is cool is that you can specify _the JavaScript version_ you want to target! For example, if you're targetting older browsers, you can compile in ES2013, if you want it to use async-await syntax, you can compile it in ES2016. You can also change the settings of _how modules are compiled_, i.e. change from the ES2016 modules to CommonJS modules which Node supports.

In this course, I learned some things you should do when you write TypeScript code:

(1) When you initialize variables, it is **not necessary** to specify the variable type. The tutor even said that **he does not like explicitly stating types when it's obvious** like when you write `let number = 5;`

(2) There are times where you need to declare the variable first without giving it a value. This is the time where you want to explicitly state what type you want it to be.

(3) Often, in development, you'll fight hurdles like where you need to **generalize the types** as development goes on. You do this by making making a more general declaration beforehand.

(4) Always try to explicitly state the return value of functions.

# Objects, Arrays, and Tuples

## Objects

Here are some example to kickstart your understanding on how to type objects.

```ts
let myCar: {
  year: number;
  maker: string;
  name: string;
} = {
  year: 2002,
  maker: "Honda",
  name: "Civic",
};
```

If you want an object have many keys but they all have the same kind of value, you can use something called **index signature**.

```ts
let phonebook: {
  [k: string]: string;
};
```

This allows you to do stuffs like

```ts
phonebook.myself = "+62 812 812 812";
phonebook.mom = "+62 812 812 813";
```

## Arrays and Tuples

For arrays, it's quite simple:

```ts
let stringArray: string[];
```

If you want to make a tuple, you have to **explicitly state it as a tuple**.

```ts
// This is the correct way to do it:
let myCar: [number, string, string] = [2002, "Honda", "Civic"];

// And this is the wrong way to do it:
let myCar = [2002, "Honda", "Civic"];
// In the above example, myCar has  a type of (number | string)[]!
```

# A step back: What is type checking anyways?

In the programming world, type checking is evaluations done to see if the type of something matches a certain condition.

This could be done when you assign variables,

```ts
x = y; // Is x and y the same type?
```

or when you call functions,

```ts
x = f(); // Is x and the return type of f the same type?
```

... and many more. That is called type evaluation.

## Static typing and dynamic typing

In a statically typed programming language, type checkings are done at compile time, not run time. This is what TypeScript does.

This is different than, let's say, Python, which is a dynamically typed programming language by default:

```py
my_number = input("Please give me a number!")
print(f"Your number, divided by 5, is {my_number / 5}")
```

That code above will crash after you entered a number because when `my_number / 5` is evaluated at run time by Python, it says to you, "Hey, you can't give me a string and expect me to divide it by 5!"

The term **duck typing** you often see JavaScript called is just another name for dynamic typing.

## Nominal typing and structural typing

Nominal typing refers to checks to see whether something has a type with the exact name, such as in Java.

```java
class Car {
  private int year;
  private String name;
}

class Truck {
  private int year;
  private String name;
}

void printCar(Car x) {
  // ...
}
```

If you put a `Truck` inside the `printCar` function, it will reject because it's expecting a `Car`, not a `Truck`.

**Nominal typing is not how TypeScript behaves**.

TypeScript behaves using structural typing -- _it checks whether the structure is the same or not_.

In the previous example,

```ts
class Car {
  year: number;
  name: string;
}

class Truck {
  year: number;
  name: string;
}

const randomObject = {
  year: 1990,
  name: "Ronald",
};

function printCar(car: Car) {
  // ...
}
```

If you try to put a `Car`, `Truck`, or that `randomObject` to `printCar`, every single one of them will be accepted because they all share the same accepted structure of Car.
