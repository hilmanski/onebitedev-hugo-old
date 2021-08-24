---
title: "How to remove last commit on github"
description: "It's just happened to me yesterday, where I push something to main branch, but not the main branch that I want. I start panicking and looking for help how to undo my last commit before anyone see the changes"
date: 2021-08-24T22:37:00.000Z
topic: [git]
series: [""]
draft: false
---
It's just happened to me yesterday, where I push something to main branch, but not the main branch that I want. I start panicking and looking for help how to undo my last commit before anyone see the changes

The code that safe me 
```
git push -f origin HEAD^:main
```

change "main" with any branch you want.

The result is flawless. People can't see the accident that just happened on you repository 😅

Take a loot at another options at [this stackoverflow thread](https://stackoverflow.com/questions/448919/how-can-i-remove-a-commit-on-github)





