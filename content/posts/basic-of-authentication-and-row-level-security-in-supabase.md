---
title: "Basic of Authentication and Row Level Security in Supabase"
description: "Supabase provides an authentications system for us out of the box. We can use it as user management. It has third party logins (social login) and row level security for security. We'll take a look of simple example using row level security to protect our data"
date: 2021-08-13T20:44:00.000Z
topic: [supabase]
series: ["Complete backend service with Supabase"]
draft: true
---
Supabase provides an authentication system for us out of the box. We can use it to manage our users. It has third party logins (social login) and row level security for security.

There are many options to allow users to register

- invitation by email
- magic link via email
- sign up with email and password
- Phone confirmation
- 3rd party login (social login)

Wow.. I'm just amazed after writing that.



## Invite Users
We'll start very simply, by invite users. This is perfect if you want to only allow certain people (maybe only you) to use the app.

Go to "authentication tab" , in users section, you'll see "green +invite button". Press it and put your email there. After sent, you can see the email is now in Users list and just waiting for verification.

Go to you email and click the confirmation.

*Sometimes the email landed in your spam folder. Move it to inbox first, so you can click the link. (it's important to tell our users later about this)

Even though the site show an error (since we don't set up any website yet), you can see your status is now confirmed by seeing the 'last sign in' part in users dashboard.

We can see the other method later. We'll just use 'invitation email' for now as the authentication system. Let's see what we can do with it

## Change the email text
Maybe you want something different in your invitation email, don't worry! Go to 'templates' in 'Authentication' tab, and scroll to 'Invite user' part. You can change email's subject and body there.

Here also live all the email templates for magic link, login or sign up. You can always change them later.

## Row Level Security
If you're following the previous tutorial, we can display and even create new entry for our database, which is not secure if everyone can do it.

Now we'll take a look how we can combine the auth system with Row Level Security to protect our site.

In your Authentication menu, go to 'Policies' tab, and enable RLS for your table.


