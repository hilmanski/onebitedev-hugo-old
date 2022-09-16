---
title: "How to declare object property type in typescript"
description: "Lets learn How to declare object property type in typescript using interface"
date: 2022-09-16T23:11:00.000Z
topic: [typescript]
series: [""]
draft: false
---
Let's learn How to declare object property type in typescript using interface.

Assume we have a TextElement object that have several properties, and we want to safely type it.

Here's how to declare it in typescript:
```
interface TextEl {
    x: number,
    y: number,
    text: String,
    fontSize: number,
    fontWeight: String,
    fontStyle: String,
    color: String,
    pageNumber: number,
    id: String,
    isRemoved: boolean,   
}
``` 

Using `interface` keyword, followed by name we want. We can declare any property we need with it's type, either number, String, boolean, ect.

If any of those property is optional (potentially can be null), remember to add question mark "?", on the type declaration. For example:
```
interface TextEl {
    x?: number,
    ...
```
