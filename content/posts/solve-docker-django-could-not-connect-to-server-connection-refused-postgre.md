---
title: "Solve docker django could not connect to server Connection refused postgre"
description: "Here is how I solve docker issue when running django could not connect to server Connection refused connecting to postgre database"
date: 2023-02-07T18:27:00.000Z
topic: [docker]
series: [""]
draft: false
---
Here is how I solve docker issue when running django could not connect to server Connection refused connecting to postgre database.

It may also work, for other than Django app.

## Solution
Make sure your host value on  `.env` file 
```
DATABASE_HOST=db
```
or your `settings.py` file 
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': f"{os.getenv('DATABASE_HOST', '')}",
        'PORT': f"{os.getenv('DATABASE_HOST_PORT', '5432')}",
        'NAME': f"{os.getenv('DATABASE_NAME', '')}",
        'USER': f"{os.getenv('DATABASE_USER', 'postgres')}",
        'PASSWORD': f"{os.getenv('DATABASE_PASSWORD', '')}"
    }
}
```

using the same name from docker-compose for the postgres image

for example if I have docker-compose.yml like this
```
version: '3.8'

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - ./:/usr/src/app/
    ports:
      - 8000:8000
    # env_file:
    #   - ./.env.dev
    depends_on:
      - db
  db:
    image: postgres:14-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=pass1234
      - POSTGRES_DB=test
    ports:
      - 5432:5432
      

volumes:
  postgres_data:
```

Then the DATABASE_HOST value should be `db` NOT `localhost`
