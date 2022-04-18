---
title: "Solve alembic multiple head revisions are present "
description: "Just like git, When you have multiple branches on your migrations of sqlalchemy's alembic. It will tell you that you have two different versions that need to be solved."
date: 2022-04-17T20:34:00.000Z
topic: [python]
series: [""]
draft: false
---
Just like git, When you have multiple branches on your migrations of sqlalchemy's alembic. It will tell you that you have two different versions that need to be solved.
Normally, it happens when you and your teammate working together and each add migrations. So you need to merge it.

If you check you heads, with 
```
alembic history
```
It'll show you that it got's more than one head.

Two ways to merge your heads in sqlalchemy
First,
```
alembic merge heads
```

Or to be more specific,
```
alembic merge -m "merge head 47380dc22857 and df23c5992351" 47380dc22857 df23c5992351
```
The second and third paramter (nr 473.. and df24..) is the head's number you got previously.
What's in quote is just a message, you can customize it.


