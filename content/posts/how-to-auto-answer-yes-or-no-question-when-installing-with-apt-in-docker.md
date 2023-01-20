---
title: "How to auto answer yes or no question when installing with apt in docker"
description: "When running a docker image, sometimes we need to install a package that requires us to answering a yes and  no question. But docker will exit because of this"
date: 2023-01-19T17:57:00.000Z
topic: [docker, linux]
series: [""]
draft: false
---
When running a docker image, sometimes we need to install a package that requires us to answering a yes and  no question. But docker will exit because of this.

So we need to "auto answer" this question for us during installation.

## Solution

That's where `-y` command parameter comes

for example, previously I have
```
RUN apt-get install libreoffice
```

Docker will exit this, because the question mentioned above.
So I need to install it with `-y` parameter to let it auto anwer for me

```
RUN apt-get -y install libreoffice
```

## What is -y command in linux
When running apt or apt-get ,   
the parameter -y is useful to auto answer Yes to all questions
