---
title: "Error Laravel Please make sure the PHP Redis extension is installed and enabled"
description: "Encountered this error? Error Laravel Please make sure the PHP Redis extension is installed and enabled. Lets see how to solve it"
date: 2022-08-08T18:11:00.000Z
topic: [redis, laravel]
series: [""]
draft: false
---
Encountered this error? Error Laravel Please make sure the PHP Redis extension is installed and enabled. Lets see how to solve it.

Using Redis can make our site faster by enabling in-memory cache data. Instead of always requesting to database.
If you just install redis on Laravel but not working with the error above. Here's what you need to do:

Add `REDIS_CLIENT=predis` on your .env file.
Don't forget to restart your server

Hope it solves your redis laravel issue


