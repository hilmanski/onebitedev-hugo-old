---
title: "Shortcut bash function to review Github Pull Request locally"
description: "This is my Shortcut bash function to review Github Pull Request locally faster"
date: 2022-10-04T00:06:00.000Z
topic: [git, bash]
series: [""]
draft: false
---
We've learnt how to [Checkout Remote Pull Request On Github And Run Locally](https://onebite.dev/checkout-remote-pull-request-on-github-and-run-locally/)

But those steps are pretty long to start reviewing changes in our text editor.
So I made a bash function for me to save some time:
```
function checkPR() {git fetch origin pull/"$1"/head:"$2" && git checkout "$2"}
```

usage 
```
checkPR PRNUMBER BRANCH-NAME
```

This way I just need to above function, and directly on the new branch where PR happened.
