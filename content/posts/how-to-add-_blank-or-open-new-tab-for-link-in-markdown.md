---
title: "How to add _blank or open new tab for link in markdown"
description: "Can we add _blank property or open new tab for our links in markdown? is there any way around it"
date: 2021-07-16T22:54:00.000Z
topic: [markdown, javascript]
---
There are some limitations when we're working with markdown, one of them is adding property to our HTML tags. In this case I want to add _blank property on my <a> tag to open a link in a new tab

## Hack it in javascript

We don't have control (mostly) with how our markdown will be rendered, but we can hack around it in javascript.

Let's say you have an article with id "article" and want to get all the links inside it, here is how
```
  const _article = document.getElementById('article') 
  const _links = _article.getElementsByTagName('a')
  for (var i = 0; i<_links.length; i++) {
    _links[i].setAttribute('target', '_blank')
  }
```


