---
title: "How to test pull request locally"
description: "You're assigned to review your teammate's code from remote git repository. But rather than just reviewing it directly in Github, you want to run it locally first. Here's how"
date: 2022-07-07T21:49:00.000Z
topic: [git]
series: [""]
draft: false
---
You're assigned to review your teammate's code from remote git repository. But rather than just reviewing it directly in Github, you want to run it locally first. Here's how you can run any pull request locally first and review it.

## Use git fetch

The first step is running `git fetch` so we can see get all things that happen remotely on the origin repository.

"The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on" - [From Atlassian Git tutorial](https://www.atlassian.com/git/tutorials/syncing/git-fetc)

We can use `git pull`. But consider `git fetch` is more safe alternative, since it won't change our local state just yet.


## Switch to any PR you want

To choose any specific branch you want to switch on.
Run `git checkout BRANCHANAME`

Happy review!


