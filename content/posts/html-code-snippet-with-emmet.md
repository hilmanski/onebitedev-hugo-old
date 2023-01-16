---
title: "HTML code snippet with emmet"
description: "make your life easier as frontend developer, by using emmet as your HTML code snippet. By installing meet, you can write HTML code much much faster"
date: 2023-01-15T18:57:00.000Z
topic: [HTML, tool]
series: [""]
draft: false
---
Make your life easier as frontend developer, by using [emmet](https://emmet.io/) as your HTML code snippet. By installing meet, you can write HTML code much much faster.

## TLDR

Here's from Emmet's documentation
*"Basically, most text editors out there allow you to store and re-use commonly used code chunks, called “snippets”. While snippets are a good way to boost your productivity, all implementations have common pitfalls: you have to define the snippet first and you can’t extend them in runtime."*

Without emmet, we must defined the [code snippet](https://onebite.dev/what-is-code-snippet-meaning/) ourself. But with emmet, everything is ready out of the box!

## Example please!
I'll give a complex example here to show the possibiltyy:

Create a div with id "page" and inside it, add a div with class "logo"

```
#page>div.logo
```

That's all you need to type, after tab, you'll see this in your text editor
```
<div id="page">
    <div class="logo"></div>
</div>
```

You can even generate fake text or as known as "lorem ipsum text", just by writing
```
 p*4>lorem
 ```
 

It'll produce 4 paragraph `<p>` with each lorem ipsum sentence.

Explore more possibilty of [emmet in documentation](https://docs.emmet.io/)

## Conclusion
Install Emmet once, in your text editor, and now you have the magic of generating HTML code snippets without writing one!
