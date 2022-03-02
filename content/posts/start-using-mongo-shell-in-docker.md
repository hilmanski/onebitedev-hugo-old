---
title: "Start using mongo shell in docker"
description: "Simple guide on how to  Start using mongo shell in docker. We just need to take the mongo's docker name and run it as interactive shell."
date: 2022-03-02T22:27:00.000Z
topic: [docker]
series: [""]
draft: false
---
This is a  simple guide on how to Start using mongo shell in docker. 

First, we just need to take the mongo's docker name and run it as interactive shell.
```
docker exec -it name_of_your_running_mongo_service mongo
```

//-it, is command for interactive shell

Then you're in the shell!   
To show all databases, run
```
show databases;
```

To go inside one of the collections, run:
```
use collection_name;
```

To list data on one of the collections, run:
```
db.collectionName.find()
```




