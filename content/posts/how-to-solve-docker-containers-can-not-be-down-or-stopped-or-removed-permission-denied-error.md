---
title: "How to solve docker containers can not be down or stopped or removed - permission denied error"
description: "How to solve docker containers can not be down or stopped or removed caused by permission denied error"
date: 2023-01-26T03:49:00.000Z
topic: [docker]
series: [""]
draft: false
---
A lot of advice is running aa-remove-unkown or teardown the apparmore. 
Which I HAVE NO KNOWLEDGE ABOUT apparmore and scared to do anything in HOST level.

So I found much simpler solution (but more hard work). 

## How to kill docker container from the inside
Find you container-name by running `docker ps`

Run.
```
docker exec -it <container-name> sh
```

Now you're on a shell, run
```
kill 1
```

Verified the docker stop running by run `docker ps` again

I got this tips by [Moritz answer on stackoverflow](https://stackoverflow.com/questions/47223280/docker-containers-can-not-be-stopped-or-removed-permission-denied-error)


