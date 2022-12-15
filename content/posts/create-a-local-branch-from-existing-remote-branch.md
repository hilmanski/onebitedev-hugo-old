---
title: "Create a local branch from existing remote branch"
description: "If you want to test remote branch locally, you can use fetch method on git to try it on your machine"
date: 2022-12-14T23:14:00.000Z
topic: [git]
series: [""]
draft: false
---
If you want to test remote branch locally, you can use fetch method on git to try it on your machine

1. First, we need to fetch the remote branch
```
git fetch origin remote-branch-name
```

remote-branch-name is your branch name on remote Git

**What is fetch in Git?**
Fetch is a command in Git to download commit, files and other info from a remote repository.

2. Checkout new branch
Now, we can checkout a new branch by pointing to the fetched branch above
```
git checkout -b local-branch origin/remote-branch-name
```

Your local-branch can be any name you want the branch name on your machine.
