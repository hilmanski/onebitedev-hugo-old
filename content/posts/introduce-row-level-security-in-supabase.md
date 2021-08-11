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


