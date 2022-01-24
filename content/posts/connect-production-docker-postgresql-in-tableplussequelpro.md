---
title: "Connect Production Docker PostgreSQL In TablePlus/SequelPro"
description: "Tips on how to connect production Docker PostgreSQL using database GUI TablePlus or sequelpro. Hope it works for you as well"
date: 2022-01-23T19:41:00.000Z
topic: [database, PostgreSQL]
series: [""]
draft: false
---
I was struggling to connect my production PostgreSQL database that I setup with docker via database GUI like sequelPro or TablePlus. So I think this will be important to share, at least will help me in the future.

Find out what's you docker ip address for that database. By running in terminal (after you login via SSH)
```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' DOCKER_DB_ID
```

If you don't know what's your DOCKER_DB_ID, get it via
```
docker ps
```

Then connecting it is standard.
Host/Socker = THE IP ADDRESS YOU GOT IN THE FIRST STEP
Port = 5432
Username = Youve setup in docker
Password = Youve setup in docker

If you run it "over ssh"
make sure to enter:
Server: Your domain name or IP address (the original not the docker one)
User: You know it
Pass: You know it

Hope it works for you as well



