---
title: "Git error push remote branch src refspec does not match any"
description: "If you got error  -  src refspec does not match any, failed to push some refs to...- when trying to push change to remote git branch, here is how I solve it"
date: 2022-12-14T23:18:00.000Z
topic: [git]
series: [""]
draft: false
---
If you got error  -  src refspec does not match any, failed to push some refs to...- when trying to push change to remote git branch, here is how I solve it

The problem is we haven't connect our git branch to the remote one. It's actually just like when we first initialize our git on main.

What we need to do is using the `-u` or `--set-upstream` parameter while push the changes.

Assume you've add and commit your changes. 
Now  
```
git push --set-upstream origin beta
```

Here `beta`  is example of your branch name

## What is upstream in Git?
In Git, upstream means reference to original repository or branch. 
