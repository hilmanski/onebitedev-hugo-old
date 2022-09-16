---
title: "Declare possible values of string in typescript"
description: "How to declare possible values of string in typescript. So we get an error if the provided parameter is wrong or have a typo?"
date: 2022-09-16T22:59:00.000Z
topic: [typescript]
series: [""]
draft: false
---

How to declare possible values of string in typescript. So we get an error if the provided parameter is wrong or have a typo?

We use `type $NAME = "possibleVal1" | "possibleVal2"`

For example I have a type called Actions with three possible values:

```
type Actions  = "strong" | "italic" | "remove"
```

Now if I want to proved value for Actions type with a typo like 'stronk' , then VS Code will warn me about it. Typesafe everybody!
