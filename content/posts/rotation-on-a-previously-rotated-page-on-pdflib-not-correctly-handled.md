---
title: "Rotation on a previously rotated page on PDF-lib not correctly handled"
description: "I found a problem where rotating on a previously rotated page on PDF-lib is not correctly handled. Here is how I solved it"
date: 2022-10-26T17:32:00.000Z
topic: [pdf-lib]
series: [""]
draft: false
---
Normally we rotate a page using setRotation like this on PDF-lib
```
const newDegree = 90 //for example
const page = pages[pageIndex]
const newRotationAngle = degrees(parseInt(newDegree))
page.setRotation(newRotationAngle)
```

We pass the newDegree to the setRotation.

But I found a case, where a PDF, that has been rotated before, not correctly handled.
It treated as if the PDF start from 0deg. But that's not always the case, sometimes the PDF has already been rotated before.

## Here is how I solved it
```
const page = pages[pageIndex]
const rotationAngle = page.getRotation().angle
const newRotationAngle = degrees(
      rotationAngle + parseInt(newDegree)
    )
page.setRotation(newRotationAngle)
```

By getting the original previous rotation angle using `page.getRotation().angle` I then add this info to our newDegree.

Now our rotation correctly handled.
