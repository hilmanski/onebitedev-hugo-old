---
title: "Solve error Alembic Can't locate revision identified by id_number"
description: "If you're using Alembic as your migration tool for sqlalchemy project on your python program, you might encountered this problem before -Alembic Can't locate revision identified by id_number- here's how to solve it."
date: 2022-04-14T18:55:00.000Z
topic: [python]
series: [""]
draft: false
---
If you're using Alembic as your migration tool for sqlalchemy project on your python program, you might encountered this problem before -Alembic Can't locate revision identified by id_number- here's how to solve it.

## What caused this error
You might delete your revision file on alembic folder manually. While in your database, the version pointed to that version. So it can't find the file. That's why this error shows up.

## How to get rid of the error
To solve this, you can change the alembic_version in your database, point to the latest file you have on folder /alembic/versions/.. OR look in to the trash file, bring back the file you deleted.

That's it



