---
title: "What is type for onClick in reactJS using typescript"
description: "What is the correct type when using onClick event in reactJS using typescript"
date: 2022-09-16T22:51:00.000Z
topic: [reactjs, typescript]
series: [""]
draft: false
---
What is the correct type when using onClick event in reactJS using typescript?

Right now, I have two possibilites:
- React.MouseEvent<Element>
- React.MouseEvent<HTMLElement>
```
function handleClick(event: React.MouseEvent<Element>){
..
}
```

or

```
function handleClick(event: React.MouseEvent<HTMLElement>){
..
}
