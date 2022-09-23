---
title: "How to add word space in tailwind CSS"
description: "Is there any way to have a word space in tailwind? Yes, this is useful if you want to have a distance / space between word"
date: 2022-09-23T21:37:00.000Z
topic: [tailwind]
series: [""]
draft: false
---
Is there any way to have a word space in tailwind? Yes, this is useful if you want to have a distance / space between word.

Even though it's not part of utility yet (not sure why). We can use the flexibility of tailwind using [arbitary values](https://tailwindcss.com/docs/adding-custom-styles). Here's how I implemented it

```
<div class="[word-spacing:-20px]"> my words is long</div>
```
