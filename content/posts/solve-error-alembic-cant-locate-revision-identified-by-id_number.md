---
title: "Solve error Alembic Can't locate revision identified by id_number"
description: "If you're using Alembic as your migration tool for sqlalchemy project on your python program, you might encountered this problem before -Alembic Can't locate revision identified by id_number- here's how to solve it."
date: 2022-04-14T18:55:00.000Z
topic: [python]
series: [""]
draft: false
---
If you're using Alembic as your migration tool for sqlalchemy project on your python program, you might encountered this problem before -Alembic Can't locate revision identified by id_number- when running command `alembic upgrade head` 

Here's how to solve it.

## What caused this error
You might delete your revision file on alembic folder manually. While in your database, the version pointed to that version. So it can't find the file. That's why this error shows up.

## How to get rid of the error
*[ upgrade answer in Jan 2023]  *
To solve this:
- If you have the file in 'trash/bin' then bring back that revision file

or if you can't find your file

- change the alembic_version in your database, point to the latest file you have on folder /alembic/versions/. But point to the "down_revision" which is second latest migration file generated. 

Why point to "down_revision"? Because when we run "alembic upgrade head". It will match what's in the latest file based on id in database, and update/migrate to newest changes based on new file.

If we point to the latest not the second latest. Then it won't migrate the file, since it's marked as the latest already in our database.





