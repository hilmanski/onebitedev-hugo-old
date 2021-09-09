---
title: "Simple jquery like selector for vanilla javascript"
description: "jQuery make us love javascript. One of the simplest but most useful feature for me is the selector in jquery, just use $ dollar sign and target the element. Let's make it happen in our vanilla javascript"
date: 2021-09-09T19:40:00.000Z
topic: [javascript]
series: [""]
draft: false
---
jQuery make us love javascript. One of the simplest but most useful feature for me is the selector in jQuery   
With just using $ dollar sign, we can target the element. Let's make it happen in our vanilla javascript  

## Custom selector function in vanilla JS
Do you know that $ sign is valid for a function name?  
That's the trick! we will create a new function that will return an element based on parameter we used.  
If hashtag (#) , means id
If dot sign (.) , means class
if nothing, then normal HTML tag
```
function $(el) {
    const type = el.charAt(0)
    switch (type) {
        case "#":
            return document.querySelector(el)
            break;
        case ".":
            return document.querySelectorAll(el)
            break;
        default:
            return document.getElementsByTagName(el)
    }
}
```

## How to use this custom element
Just like our friend, jQuery
```
$('form')[0].classList.add("is-hidden") //targeting first form and add classname
$('#tools').innerHTML = 'im new content!' //targeting div with id 'tools' add change the text
```


