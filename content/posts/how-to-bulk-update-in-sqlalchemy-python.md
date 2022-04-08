---
title: "How to bulk update in sqlalchemy python?"
description: "Update multiple columns one by one is daunting. Learn how to do a bulk update on Sqlalchemy in python programing language to update multiple items at once."
date: 2022-04-08T02:00:00.000Z
topic: [python]
series: [""]
draft: false
---
Update multiple columns one by one is daunting. Learn how to do a bulk update on Sqlalchemy in python programing language to update multiple items at once.

Thanks so much from the gist by victorjabur https://gist.github.com/doobeh/b16e800cdd51d6413c09

Here's the raw implementation
```
from sqlalchemy.sql.expression import bindparam
stmt = update(TableName)\
    where(TableName.c.id == bindparam('_id')).\
    values({
        'user_id': bindparam('user_id'),
        'email_address': bindparam('email_address'),
    })

conn.execute(stmt, [
    {'user_id': 1, 'email_address' : 'jack@yahoo.com', '_id':1},
    {'user_id': 1, 'email_address' : 'jack@msn.com', '_id':2},
    {'user_id': 2, 'email_address' : 'www@www.org', '_id':3},
    {'user_id': 2, 'email_address' : 'wendy@aol.com', '_id':4},
])
```

Watchout! the line
```
where(TableName.c.id == bindparam('_id')).\
```
What's in bindparam must be different from your column's table name. So in case you have a raw dictionary that have same name, you need to change it first.
Remember to attach that "_id" as indicator on array when you executing it.


