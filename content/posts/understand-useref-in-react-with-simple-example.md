---
title: "understand useRef in React with simple example"
description: "what is useRef in Reactjs, when is it useful to use? what is the different with declaring normal variable in React"
date: 2023-03-02T20:06:00.000Z
topic: [react]
series: [""]
draft: false
---
In React, the useRef Hook allows you to persist values between renders.

useRef can be used to point a DOM element. So It's like a magic wand that lets you point to the element you want to work with, and make changes to it without having to reload the page.

![image](https://i.ibb.co/7kF0P0f/Screen-Shot-2023-03-03-at-16-08-34.png)

> useRef is a React Hook that lets you reference a value that’s not needed for rendering. - reactjs docs 

## Simple usage of useRef in React in DOM
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

We're creating a ref using useRef and assigning it to the myDivRef variable. We're passing this ref to the ref prop of the first div element. This means that the current property of myDivRef will initially point to the first div element.

In the handleClick function, we're accessing the style property of the current property of myDivRef and setting the backgroundColor property to 'red'. This changes the background color of the first div element when the button is clicked.

> In this example, we're using useRef to access a DOM element, but you can also use it to store any other type of mutable value that you need to persist between renders.

## Simple usage of useRef in React "not" in DOM
```
import React, { useState, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  function handleButtonClick() {
    countRef.current = countRef.current + 1;
    console.log(`Count value is now ${countRef.current}`);
  }

  return (
    <div>
      <p>Count value is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleButtonClick}>Log count</button>
    </div>
  );
}
```

**Code explanation**

we're using useRef to store a value that persists between renders. We're creating a countRef object with useRef, and initializing it to the current value of count using useRef(count).

When the user clicks the "Log count" button, we're updating the value of countRef.current to be countRef.current + 1, and logging the new value to the console. Because countRef is not a state variable, updating its value doesn't trigger a re-render of the component.

## TLDR: this is what useRef brings
- you can use useRef to store information that persists between renders, unlike regular variables that reset on each render.
- Unlike state variables, changing the useRef value doesn't trigger a re-render of the component.
- The information stored with useRef is local to each instance of the component, unlike variables declared outside of the component that are shared across all instances

