---
title: "Print X number of docker logs"
description: "Here is how to print certain amount of logs on docker. It is helpful for me to debug what is happening recently"
date: 2023-01-03T02:57:00.000Z
topic: [docker]
series: [""]
draft: false
---
Here is how to print certain amount of logs on docker. It is helpful for me to debug what is happening recently

```
docker logs -f --tail NUMBER container_name
```

Change NUMBER with how many logs do you want to print, for example we want to show last 10 logs: 


```
docker logs -f --tail 10 container_name
```

**What about CONTAINER_NAME ?**
You can get container name by running `docker ps` and copy your desired image
