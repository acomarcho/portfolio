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

# Objects, arrays, and tuples

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

## Arrays and tuples

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

# Union types

A union type is essentially like an 'OR' in math - if you have `Type1 | Type2` it means it can either be Type1 or Type2. It's quite simple.

The one I want to highlight is how you can use _tagged_ union types for cleaner code. Here is an example function that you might want to write:

```ts
const fetch = (): {name: string} | Error {
  // Do something
}
```

The function `fetch` either returns an object with structure `{name: string}` or an `Error`. While this is fine, processing it would be hard, i.e. you'd have to do something like this:

```ts
const x = fetch();

if (x instanceof Error) {
  // Handle error
} else {
  console.log(x.name);
}
```

The portion, `x instanceof Error` is what you can call as a _type guard_.

You can make the code more readable by introducing tags and returning it as a tuple with the tag on the 0th index.

```ts
const fetch = (): ["success", {name: string}] | ["error", Error] {
  // Do something
}

const x = fetch();

if (x[0] === "success") {
  // Handle success case
} else {
  // Handle error case
}
```

# Intersection types

Here's where things get quite interesting. _Intersections might confuse you_, but it's helpful to think it as a venn diagram where the intersection is a **place where both properties exists**.

So, if you have, say,

```ts
type A = {
  name: string;
};
```

and

```ts
type A = {
  age: number;
};
```

The type, `A & B` (intersection of A and B) would be

```ts
type IntersectionofAAndB = {
  name: string;
  age: number;
};
```

because it contains both properties! (name from A and age from B)

# Interfaces

In TypeScript, there are also interfaces. Sure, you can use them like a type, but it's much more strict. **You cannot use things like union types or intersection types**, you can only define an interface as an object.

```ts
interface AllowedInterface {
  name: string;
  age: number;
}

// Can't have an interface that is a union or intersection!

const myObject: AllowedInterface = {
  name: "John",
  age: 12,
};
```

Having an interface is useful if you want give a 'contract' to classes to make sure they implement something.

```ts
interface CuteStuff {
  voice: string;
}

class Dog implements CuteStuff {
  // This Dog class must implement the voice property.
}
```

You can have two definitions of an interface, too. It will work 'like' an intersection type.

For types, this will crash:

```ts
type A = {
  name: string;
};

// This line below here will output an error because you have two definitions of A
type A = {
  age: number;
};
```

But, for intersections, it will not!

```ts
interface A = {
  name: string;
}

interface A = {
  age: number;
}

let myObject: A;

/**
 * myObject now has to comply with type {name: string; age: number;}
 */
```

## When to use types or interfaces?

Use types if you want to use union/intersection types.

Use interfaces if you want to 'create contracts' for classes or you want the users of your code to be able to add properties to it.

# Function types

You can define the signature of a callable type (i.e. functions) using this kind of syntax:

```ts
/**
 * Using ':' to specify return type
 */
interface MyFunction {
  (a: number, b: number): number;
}

/**
 * Using '=>' to specify return type
 */
type MyFunction2 = (a: number, b: number) => number;

const add: MyFunction = (a, b) => a + b;
```

## The return type `void`

In JavaScript, we know that functions that returns nothing will return `undefined`.

```js
/**
 * Output: undefined
 */
console.log(console.log(4));
```

In TypeScript, if you want to accept that a function you expect to not return anything, **do not tell that it returns undefined**, instead **say that it returns void**.

Returning undefined means that **it will expect you to return undefined specifically** but returning void means **to ignore whatever the return type is**.

Example:

```ts
function handleNumber(x: number, handler: (x: number) => void);
function handleNumber2(x: number, handler: (x: number) => undefined);
```

If you pass a handler that returns something other than undefined, `handleNumber` will work just fine, but `handleNumber2` will output an error.

# Function overloading

This is a bit complex, but let's say you have a scenario like this:

```ts
type NumberHandler = (x: number) => number;
type StringHandler = (x: string) => string;

function myHandler(x: number | string, action: NumberHandler | StringHandler) {
  // Do something here
}
```

Say, you want the action to be `NumberHandler` only if x is a number and `StringHandler` only if x is a string.

To make this possible, you need something called **function overloading**.

```ts
type NumberHandler = (x: number) => number;
type StringHandler = (x: string) => string;

/**
 * Overload functions by specifying the correct signatures.
 */
function myHandler(x: number, action: NumberHandler);
function myHandler(x: string, action: StringHandler);
/**
 * Now, put the actual implementation below.
 */
function myHandler(x: number | string, action: NumberHandler | StringHandler) {}
```

One thing to make sure is that the signatures in the implementation must accommodate all the signatures you specified when you overload it.

# Working with classes

There is a problem in JavaScript where you can't really know what things you have in a class:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/**
 * What properties does a Person have?
 * What type is name?
 * What type is age?
 */
```

Using TypeScript, you can make it clearer!

```ts
class Person {
  name: string;
  age: string;
  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
}
```

## Access modifiers

I assume you readers have learnt in your OOP class about these three fields: _public_, _private_, and _protected_.

TypeScript allows you to do that -- but bear in mind that **this is only works in the linter world, at runtime it's still pretty much exposed**.

```ts
class Person {
  private name: string;
  private age: string;
  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
}

/**
 * Now, name and age can only be seen inside of the Person class!
 */
```

## Shorthand for constructing attributes

To avoid writing a lot of duplicate `this.<var_name>` assignments, you can do things like this in TypeScript:

```ts
class Person {
  constructor(private name: string, private age: string) {}
}

/**
 * This is basically the same code as the previous code block.
 */
```

## Readonly attributes

You can define something that behaves like a constant defined using `const` for a class with `readonly`, i.e.

```ts
class Person {
  private readonly name;
  private age string;
  constructor(name: string, age: string) {
    /**
     * You can assign name here because here is where you give it's initial value
     */
    this.name = name;
    this.age = age;
  }

  public changeName(name: string) {
    /**
     * This function is not valid because name is readonly, you can't reassign it
     */
    this.name = name;
  }
}
```
