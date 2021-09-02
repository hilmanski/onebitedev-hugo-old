---
title: "How to concatenate string on hugo SSG"
description: "quick tips on How to concatenate string on hugo SSG or how to combine string with variable on gohugo"
date: 2021-09-02T22:27:00.000Z
topic: [hugo]
series: [""]
draft: false
---
We can combine a raw string and a variable on a hugo and saved in on a new string

Example: I want to combine a title with a string
```
{{ $title := print .Title " is your title"}}
```

Later we can print or reuse the title above
```
{{ $title }}
```


