---
title: "Solve poetry problem: configuration is invalid properties group was unexpected"
description: "Here is how I solve my poetry python configuration problem, where  Additional properties are not allowed (group was unexpected) issue"
date: 2023-01-17T21:18:00.000Z
topic: [python]
series: [""]
draft: false
---
Here is how I solve my poetry python configuration problem, where  Additional properties are not allowed (group was unexpected) issue

## Background problem
New poetry (I believe from version 1.2) introduce [a "group" dependecy](https://python-poetry.org/docs/master/managing-dependencies/)

Which causing this error if you have version < 1.2  

You can spot this in your pyproject.toml, if you have something like [tool.poetry..group..]

## Solution
Upgrade your poetry to recent version or at least 1.2 (better communicate with your team). (Install and use that version)

Or another tips, if you'd like to stay on your current version (NOT UPDATING):
Specifically, change [tool.poetry.group.dev.dependencies] to [tool.poetry.dev-dependencies
 
