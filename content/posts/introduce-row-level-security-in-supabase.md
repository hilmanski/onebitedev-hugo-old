---
title: "Introduce Row Level Security in Supabase"
description: "Supabase has a row level security that useful for protecting our data. Even though we're using anon key publicly or in client side, it's still safe as long as we enable the row level security for that particular table"
date: 2021-08-14T23:26:00.000Z
topic: [supabase]
series: ["Complete backend service with Supabase"]
draft: false
---
Supabase has a row level security that useful for protecting our data. Even though we're using anon key publicly or in client side, it's still safe as long as we enable the row level security for that particular table







## Enable RLS in supabase

Go to 'Authentication Menu > Policies > Enable RLS (for any table you want)' 
Different table can have different RLS policy. Maybe you want some table to be protected, some maybe not.
![enable RLS](https://i.imgur.com/BpllvKZ.png)

If your RLS is enabled, try to access your database via API now, it's protected, you can't see it anymore

## Create basic policy

Now click "New policy"
and choose 'create a policy from a template' 
Now use the template 'Enable read access to everyone'

This means, any people can read the data.

{{< video "https://i.imgur.com/09hcCch.mp4" >}}

*Yes, supabase again make it easy for us to get started, there is a template already. For more advanced use case, you maybe want to write it from scracth

Now try to read your database again via API, it's available again to read but not other action (write, update, delete)

This means, if you need to create a website/app that need to display the data from database, it's totally safe to only use it in client side

## Policy when insert data
Try to insert something via API, it will failed with the same reason. 
Now, we need to add a new policy to allow insert only for authenticated user, which is available for us in the template section.

Click "New policy"
Choose 'create a policy from a template' 
Now use the template 'Enable insert access to authenticated users only'
Next, click insert (it's default already)
Review and Save

Now when I try to run the code again with this insert function.
(assume you already logged In)

```
const user = _supabase.auth.user()

if(user) {
    //you're logged in
    async function insertData() {
        const { data, error } = await _supabase
            .from('posts')
            .insert([
                { title: 'The Shire', body: 'im, the body ladies and gentleman', tag: 'fun' }
            ])

        console.log(data)
        console.log(error)
    }
    insertData()
}
```
It works! now every authenticated user can post something on our database

[Complete repository code here](https://github.com/hilmanski/demo-supabase-clientside/blob/row-level-security/index.html)


