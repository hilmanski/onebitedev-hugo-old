---
title: "How to get x and y coordinate position when clicking on javascript"
description: "Learn How to get x and y coordinate position when firing on click event at javascript"
date: 2022-09-13T20:41:00.000Z
topic: [javascript]
series: [""]
draft: false
---
Let's see how to get x and y coordinate position when firing on click event at javascript

We need to catch event's property, specifically, the pageX and pageY attribute.

```
<div onclick="handleClick(event)"> Test </div>

function handleClick(event){
 console.log('x :', event.pageX)
  console.log('y :', event.pageY)
}
```


Feel free to try!
