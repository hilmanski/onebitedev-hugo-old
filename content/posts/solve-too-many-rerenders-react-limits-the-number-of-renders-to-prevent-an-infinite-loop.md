---
title: "Solve Too many re-renders. React limits the number of renders to prevent an infinite loop"
description: "I got an error on my react app says: Too many re-renders. React limits the number of renders to prevent an infinite loop. How can I solve this?"
date: 2022-09-13T21:36:00.000Z
topic: [react]
series: [""]
draft: false
---
I got an error on my react app says: Too many re-renders. React limits the number of renders to prevent an infinite loop. How can I solve this?

I'm just calling a function event from my component and try to call usestate function. 
```
<span onClick={editTextElement('strong')}> <strong>B</strong> </span> 
```
But this error occured.

### Solution
After searching this problem on stackoverflow: [Uncaught Invariant Violation: Too many re-renders. React limits the number of renders to prevent an infinite loop](https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re) .

Finally found what's causing it and the way to get rid of this error.
```
<span onClick={() => editTextElement('strong')}> <strong>B</strong> </span> 
```

### Cause
Apparently, if we passed a function with parentheses, the function would execute every time the component renders. Which causing the error message shown. To prevent the infinite render happening.

I need to call () => ..then my function. 
