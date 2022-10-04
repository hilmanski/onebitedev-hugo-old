---
title: "Dragging item on mobile also scrolling the parent"
description: "When working with dragging library like interactjs, I got a problem with mobile devices. Where scrolling get buggy and moving the parent as well"
date: 2022-10-04T02:37:00.000Z
topic: [javascript]
series: [""]
draft: false
---
When working with drag and drop library like [interactjs](https://interactjs.io/), I got a problem with mobile devices. Where scrolling get buggy and moving the parent as well.

Here's how I solved this:
Using `touch-action: none;` CSS property.

We add this property to the class of the element we want to drag.
For example in interactJS we initialize draggable element like this:
```
interact(`.classname-of-element`).draggable({
..
})
```

So now in CSS:
```
.classname-of-element {
   touch-action: none;
}
```


Caused:
It caused by the default behavior on mobile where touch become a way to scroll an overflow parent element. So we need to prevent this event.
