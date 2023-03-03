---
title: "understand useRef in React with simple example"
description: "what is useRef in Reactjs, when is it useful to use? what is the different with declaring normal variable in React"
date: 2023-03-02T20:06:00.000Z
topic: [react]
series: [""]
draft: false
---
In React, the useRef hook is a tool that helps you interact with specific parts of your website, like a button or an image. 

It's like a magic wand that lets you point to the element you want to work with, and make changes to it without having to reload the page.

![image](https://i.ibb.co/7kF0P0f/Screen-Shot-2023-03-03-at-16-08-34.png)

> useRef is a React Hook that lets you reference a value that’s not needed for rendering. - reactjs docs 

## Simple usage of useRef in React
```
import React, { useRef } from 'react';

function MyComponent() {
  const myDivRef = useRef(null);

  function handleClick() {
    myDivRef.current.style.backgroundColor = 'red';
  }

  return (
    <div>
      <div ref={myDivRef}>This is my div.</div>
      <button onClick={handleClick}>Change color</button>
    </div>
  );
}
```

**Explanation from example above**

- We're creating a ref using useRef and assigning it to the myDivRef variable. 
- passing this ref to the ref prop of the first div element. This means that the current property of myDivRef will initially point to the first div element.

- In the handleClick function, we're accessing the style property of the current property of myDivRef and setting the backgroundColor property to 'red'. This changes the background color of the first div element when the button is clicked.

> In this example, we're using useRef to access a DOM element, but you can also use it to store any other type of mutable value that you need to persist between renders.

## TLDR: this is what useRef brings
- you can use useRef to store information that persists between renders, unlike regular variables that reset on each render.
- Unlike state variables, changing the useRef value doesn't trigger a re-render of the component.
- The information stored with useRef is local to each instance of the component, unlike variables declared outside of the component that are shared across all instances
