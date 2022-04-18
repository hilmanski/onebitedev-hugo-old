---
title: "How to make bcrypt checkpw function work"
description: "If you're using bcrypt in python, and try to use checkpw but keep failing, probably you save the hashed password in database wrong. Here's how I solve it."
date: 2022-04-18T22:19:00.000Z
topic: [python]
series: [""]
draft: false
---
If you're using [bcrypt package](https://pypi.org/project/bcrypt/) in python, and try to use checkpw but keep failing, probably you save the hashed password in database wrong. Here's how I solve it.

On storing the hashed password to database
```
password = password_from_user.encode("utf-8")
hash = bcrypt.hashpw(password, bcrypt.gensalt())
stored_password = hash.decode("utf-8") #The key is to decode it first
# continue by saving it to DB
```

And how you compare it alter, using checkpw is like this:
```
if bcrypt.checkpw(password_from_input.encode("utf-8"), password_from_database.encode("utf-8")):
 return True
```

Hope it solves your error "returns TypeError: Unicode-objects must be encoded before checking" on your python project.






