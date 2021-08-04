---
title: "Call method only once in useEffect react"
description: "Be careful  when using useEffect in React. it can bring unintentional behavior you don't want, like calling API multiple times"
date: 2021-08-03T20:07:00.000Z
topic: [react]
---
useEffect is part of hooks. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
Be careful, it can bring unintentional behavior you don't want.

## useEffect will run multiple times

Based on FAQ section in [useEffect docs](https://reactjs.org/docs/hooks-effect.html)
Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.



## Calling API problem in useEffect

If you need to call an API from useEffect, remember it will call it multiple times on every update. That's why you need to stop this behavior by passing empty array in second argument like this

```
useEffect(() => {
        callingAPI()
    }, [])
```


