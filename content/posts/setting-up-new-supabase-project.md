---
title: "Setting up new @Supabase Project"
description: "Let's see how to start a new project on supabase. And we'll see overview of what we can do on our supabase dahsboard"
date: 2021-08-10T23:22:00.000Z
topic: [supabase]
series: ["Complete backend service with Supabase"]
draft: false
---
This will be a short one, we'll see how to set up a new project at supabase. I must say it's very intuitive, you might not need this guide. But just in case, there is a tips or trick, that might be useful in future regarding setting up a new project, I'll document it here



## Register new account

To start a new project on Supabase, we need to sign up first (currently we need to use Github account)

![login supabase view](https://i.ibb.co/M2137mS/Screen-Shot-2021-08-10-at-7-23-10-AM.png)

The dashboard looks empty for now, let's create a new project. We can use the default organization or you can create new one if you want to.

## Create new project

Don't worry too much about the name, we can always rename it.

Each of the project will have their own dedicated instance and full Postgres database. Bonus: An API will be set up automatically so you can easily interact with your new database later.

*Choose region that close to your end user.

![screenshot creating new project](https://i.ibb.co/1qfL4WX/Screen-Shot-2021-08-10-at-7-27-07-AM.png)

After clicked, Supabase will take some time to provision our database and API endpoint, just chill and relax first.

While waiting, we can browse the [supabase documentation](https://supabase.io/docs), to be more familiar with.

## Dashboard overview

Supabase offers a lot of handy services for us, like database, auth and storage. We don't need to use everything, so don't get overwhelmed with it. You can start by exploring the menu in your left side.

You can see there are:
- Table editor, a GUI for our database tables
- Authentication: Here we can see all the users that registered. Create a policy, define email template that we well send to our user and set up other things like social login
- SQL tab. Is a where we can run our script. If you want to run any Postgre's query, function, trigger, etc. you can run it here. It even has a lot of pre-configure table that ready to run from some project's sample
- API: we can see list of our API that generated based on our usage (it comes down to your table and column name)

That's a quick introduction of how to setup a project in Supabase and overview of our dashboard


