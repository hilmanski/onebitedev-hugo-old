---
title: "How to convert sqlalchemy object to json in FastAPI"
description: "Have you struggled on How to convert sqlalchemy object to json in FastAPI? Do you know that fastapi  has jsonable_encoder to do exactly this job?"
date: 2022-04-15T21:36:00.000Z
topic: [fastapi, python]
series: [""]
draft: false
---
Have you struggled on How to convert sqlalchemy object to json in FastAPI? Do you know that fastapi  has jsonable_encoder to do exactly this job?

You just need to import
```
from fastapi.encoders import jsonable_encoder
```

Then use it on any sqlachemy object, or any object you want
```
jsonable_encoder(Item)
```
It'll turn this object into a json


