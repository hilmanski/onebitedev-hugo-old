---
title: "How to add and remove another git remote repository"
description: "You have an origin remote repository for your git. But you need to add other remote repository. Lets see how to do this"
date: 2022-09-18T22:25:00.000Z
topic: [git]
series: [""]
draft: false
---
You have an origin remote repository for your git. But you need to add other remote repository. Lets see how to do this

```
git remote add my_new_name https://github.com/hilmanski/any_remote_repo
```

Now you can verify with
```
git remote -v
```

It will list all you remote repositories.

To push to this new repo, we can just type
```
git push my_new_name main
```

*change main, with any branch you want
