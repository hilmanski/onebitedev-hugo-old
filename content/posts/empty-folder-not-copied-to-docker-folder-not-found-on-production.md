---
title: "Empty folder not copied to docker - folder not found on production"
description: "If your empty folder not copied to docker while on production and you getting error folder not found - here is how I solve it"
date: 2023-01-03T03:33:00.000Z
topic: [docker]
series: [""]
draft: false
---
If your empty folder not copied to docker while on production and you getting error folder not found - here is how I solve it

## Problem
The problem is actually not in docker, but in my case, it's a git issue. Where an empty folder is not copied by my git.

## Add empty folder to git
To add your empty folder to git, on your empty directory run
```
touch .gitkeep
```

Then re add, commit and push your changes

## That's it!
Now if you deployed this recent changes on your production, you can already see your folder there!

*You might need to docker down and up again
