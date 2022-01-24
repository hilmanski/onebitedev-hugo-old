---
title: "Connect Localhost Docker PostgreSQL in TablePlus"
description: "Tips on how to connect Localhost Docker PostgreSQL using database GUI TablePlus or sequelpro"
date: 2022-01-23T19:37:00.000Z
topic: [database, PostgreSQL]
series: [""]
draft: false
---
I was struggling to connect my local PostgreSQL database that I setup with docker via database GUI like sequelPro or TablePlus. So I think this will be important to share, at least will help me in the future.

On your docker-compose file, make sure in database section
you add this ports
```
ports:
      - "5432:5432"
```
It will then expose your port publicly.

Then connecting it is standard.
Host/Socker = localhost
Port = 5432
Username = Youve setup in docker
Password = Youve setup in docker

Hope it works for you as well



