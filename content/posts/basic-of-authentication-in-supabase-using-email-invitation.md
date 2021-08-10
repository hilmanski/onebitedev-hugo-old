---
title: "Basic of Authentication in Supabase using email invitation"
description: "Supabase provides an authentications system for us out of the box. We can use it as user management. It has third party logins (social login) and row level security for security. We'll take a look of example using simple email invitation"
date: 2021-08-13T20:44:00.000Z
topic: [supabase]
series: ["Complete backend service with Supabase"]
draft: false
---
Supabase provides an authentication system for us out of the box. We can use it to manage our users. It has third party logins (social login) and row level security for security.

There are many options to allow users to register

- invitation by email
- magic link via email
- sign up with email and password
- Phone confirmation
- 3rd party login (social login)

Wow.. I'm just amazed after writing that. In this article, we'll start with the basic one, invite user by email.

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

## Change your redirect site

Go to Authentication tab > Settings,
you can change the value of 'Site URL' according to your site. Localhost also works
![ss redirect](https://i.ibb.co/m4mDDJ6/Screen-Shot-2021-08-11-at-6-57-42-AM.png) 

Try to sent email again, now you'll see the redirect path is changed

## Check user auth or not

Take a look at your localstorage, automatically supabase sign a 'supabase.auth.token' for us

On your page: right click > inspect element > Application tab > Localstorage > your site
you can see this

![ss localstorage](https://i.ibb.co/6Zr6jn8/Screen-Shot-2021-08-11-at-7-12-15-AM.png) 

Now when you run 
```
console.log(_supabase.auth.user())
```
you can see that auth user information is available for us.

If you now write this simple conditional statement
```
const user = _supabase.auth.user()

if(user) {
    alert('you are logged In!')
}
```
You'll get an alert, as the information that we're logged in now.

Do whatever you want by playing with this 'user variable' in the conditional statement, as an example: display a div that tell users is logged in or not.




