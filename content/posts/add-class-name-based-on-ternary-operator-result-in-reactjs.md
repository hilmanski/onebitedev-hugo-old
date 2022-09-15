---
title: "Add class name based on ternary operator result in ReactJS"
description: "Lets see how we can add a class name based on ternary operator result in ReactJS. Whether a single class name or multiple class names."
date: 2022-09-14T17:44:00.000Z
topic: [react]
series: [""]
draft: false
---
To toggle an element, normally I add .is-hidden class name on CSS. Any elements I want to hide will use this class
```
.is-hidden{
 display: none;
}
```


## Simple usage on single class name
Now we can use ternary operator to toggle an element based on other state variable value
```
<div className={elementSelected && 'is-hidden'}>
```

In this sample. I have a variable called `elementSelected` . It will show is-hidden class to this div only if the value is true or not null in general.

*Notes `elementSelected` can be whatever boolean condition that has true/false result.

## Use in multiple class names in CSS ReactJS
Now let's use it when we have other class name before it.

```
<div className={'other-classname ' + (elementSelected && 'is-hidden')}>
```

Now we have `other-classname` that always comes with the div. And only toggle `is-hidden` based on the `elementSelected` value
