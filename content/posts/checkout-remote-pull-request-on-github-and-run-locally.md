---
title: "Checkout remote pull request on Github and run locally"
description: "If you need to review someones pull request from Github and run the project locally. Check out this guide"
date: 2022-07-07T22:03:00.000Z
topic: [git]
series: [""]
draft: false
---
If you need to review someones pull request from Github and run the project locally. Check out this guide.

For general method, to fetch any remote changes, please see [How to test PR locally](https://onebite.dev/how-to-test-pull-request-locally/)

Now, we'll see the step by step to checkout a certain pull request, so we can run it on our machine!

## Get the PR number

1. Either by looking directly on Pull request's tab on Github. To see the number (that comes after the hashtag) 
2. Alternative, install [github-cli command](https://github.com/cli/cli). 
And run
```
gh pr list
```

This command with show all pull request

## Fetch the pull request

We can fetch the pull request by running
```
git fetch origin pull/66/head:new-branch-name
```
On that sample:  
66 -> is your PR's number
new-branch-name -> new branch name you want to use locally


## Checkout to that PR!

Now is reviewing time!
Checkout to that local branch from PR.. done!
```
git checkout new-branch-name
```

Again, "new-branch-name" is your choosen branch from previous step


