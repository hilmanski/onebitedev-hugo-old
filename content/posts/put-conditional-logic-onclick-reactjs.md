---
title: "Put conditional logic onClick ReactJs"
description: "If you need a different behavior of your on click action in ReactJS, depend on if else logic you have, try this"
date: 2022-11-18T22:11:00.000Z
topic: [react]
series: [""]
draft: false
---
If you need a different behavior of your on click action in ReactJS, depend on if else logic you have, try this

```
<div
    onClick={() => {
    (checkLogic == true)
        ? doSomething()
        : doSomethingElse()
    }}
>
    Content
</div>
```

Our on click event now have two different possibilities, depend on checkLogic result. If it's true it will do something, if not then do something else

Or if you want to turn off the onClick (do nothing), we can pass empty bracket
```
<div
    onClick={() => {
    (checkLogic == true)
        ? doSomething()
        : {}
    }}
>
    Content
</div>
```
