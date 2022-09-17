---
title: "How to declare type in Object destructuring typescript"
description: "Learn how to declare type in typescript when using Object destructuring in Javascript"
date: 2022-09-18T00:37:00.000Z
topic: [typescript]
series: [""]
draft: false
---
Learn how to declare type in typescript when using Object destructuring in Javascript.

At first, I tried using `semicolon(:) and type` but it keeps showing me an error.

```
function TextElement({el: TextEl, text: string}){
..
}
```

What's wrong with above is, in Javascript putting semicolon on object desctructuring means assign the value to it. So it'll find TextEl variable and assign to El. That's not what we want!

What we should do to be able to use typescript in "Javascript Object Desctrucure" is the following: 
```
function TextElement({el, text}: {el: TextEl, text: string}){
..
}
```

- we let the object as it is
- Only after the bracket, we provide semicolor with a new object, which consist of key-value of "variablename: type".

Hope it helps!
