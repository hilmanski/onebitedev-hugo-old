---
title: "Install multiple fonts on docker images"
description: "Looking for a way on how to install multiple fonts on your docker images? here is how I did it"
date: 2022-12-12T03:22:00.000Z
topic: [docker]
series: [""]
draft: false
---
Looking for a way on how to install multiple fonts on your docker images? here is how I did it

```
...
WORKDIR /app

COPY fonts ./
RUN mkdir -p /usr/share/fonts/truetype
RUN install -m644 ./*.ttf /usr/share/fonts/truetype/
RUN rm ./*.ttf

...
```

Explanation: 
- First put all your fonts on fonts folder -> Copy it to docker image
- Create a new directory to install our fonts `/usr/share/fonts/truetype`
- Install with correct permission all *ttf files (assume all you fonts on this file extension) on that new created folder
- Remove all .ttf files on docker images

Feel free to try!





