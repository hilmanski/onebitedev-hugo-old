---
title: "Explore table editor in Supabase database"
description: "Exploring table editor for managing database in Supabase. It's like an app that has Graphical User Interface (GUI) where we can do something intuitively without knowing any SQL. Supabase's database is built on top of Postgres, an extremely scalable relational Database. We can use the SQL editor or Table Mode which makes it like spreadsheet"
date: 2021-08-11T17:32:00.000Z
topic: [supabase]
series: ["Complete backend service with Supabase"]
draft: false
---
We'll start by exploring the database feature in Supabase, which built on top of Postgres, Relational Database. We can use the SQL editor, where we can run our query or "Table Mode" which makes it like spreadsheet, where we can user the GUI to play around with our data.

![ss database supabase](https://i.ibb.co/WFZRBzp/Screen-Shot-2021-08-10-at-1-33-11-PM.png)

## Table Editor

Using table editor is just like using a spreadsheet, we have buttons and columns to work with. We can start create a new table, for our database
![add new table ss](https://i.ibb.co/sJWtt8w/Screen-Shot-2021-08-10-at-1-44-14-PM.png)

Supabase also allow us to import data by upload a CSV, TSV or XLSV file or even copied text from a spreadsheet.

Try to name your new table 'posts' (or anything you like), then click save.

## Add columns
Now we have our table, which only has an id. 
That's not fun, let's add more columns on our new 'posts' table

![add new column](https://i.ibb.co/Z689wZ9/Screen-Shot-2021-08-10-at-1-47-11-PM.png)

Press the "+ sign" near our id. Now we can add a new column. Let's say we want this to be a blog database. 

I'll add a column named title with varchar as value.
Uncheck the "allow nullable" option to make sure it's not empty.
![add new post](https://i.ibb.co/pLB5RGC/Screen-Shot-2021-08-10-at-1-50-45-PM.png)

Now let's make other columns with this name and type. Do the exact step above, by pressing plus sign and give new values:

- name: body | value:text
- name: tag | value:varchar
- name: created_at | value: timestamp | Default Value: NOW()

Now we have a useful table for our blog. With a title, body, tag for the category and created_at column for the creation date. 

It's a good practice to always have 'created_at' and 'updated_at' column on a database, to keep track when we make and change data in our database.

## Insert new data

Now we're ready to insert some data. Click the "+ insert row" green button and add our new data.

You can leave 'id' empty. It will generated automatically for us. Now, just like writing something on wordpress, you can make your own blog!

![add new row](https://i.ibb.co/yQF5vCd/Screen-Shot-2021-08-10-at-1-58-59-PM.png)

Your new blog is inserted! try to make other posts.

## Test the API

Supabase generate API for us to access the database. Go to the "API menu" and under 'tables and Views' select your table name.  On the right panel, you can see your API, ready to use.

![API Menu](https://i.ibb.co/D1tXXCs/Screen-Shot-2021-08-10-at-2-00-53-PM.png)

Let's try our API to see if it really works. Go to 'Bash Mode' and choose 'anon key', which will complete our API information like below

![bash option](https://i.ibb.co/yPzb3c9/Screen-Shot-2021-08-10-at-2-05-16-PM.png)

Copyone of the curl options you see on the right panel and paste it on your terminal / command line (assume you already cURL installed)

![commandline curl](https://i.ibb.co/mhzcPJ7/Screen-Shot-2021-08-10-at-2-09-00-PM.png)

Magic! our API return the exact data we just created before.

That's it, a quick intro on table editor from Supabase


