---
title: "Load Supabase database in website with Javascript"
description: "Learn how to load Supabase database via it's API with Javascript on a website. We will use in browser javascript to load the data and display it on our HTML page."
date: 2021-08-12T18:40:00.000Z
topic: [supabase]
series: ["Complete backend service with Supabase"]
draft: false
---
In this article, we'll see how to load our data from Supabase database via it's API by using Javascript in our website.

## init Supabase

Start by creating new index.html file (name it whatever you want). 

TO Install supabase, we can use CDN or NPM for this.
In this example I'll add it via CDN. Put this in your head tag
```
 <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
```

To start initializing Supabase on our project, create new script tag with this code
Change the credential below with yours. You can see it in your 'settings > API menu' in Supabase dashboard
```
<script>
const SUPABASE_URL = 'https://gpdywhtwqnlapruuxzxz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODU1MTczNSwiZXhwIjoxOTQ0MTI3NzM1fQ.L7CPwacaytFdW1iXs4tjPE3lgoW4IJQ0rziOlxtRuG4'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
</script>
```


## Code!

We use supabase js API to access our data
In your script tag, add it after _supabase initialization from above

```

async function loadData() {
    const { data, error } = await _supabase
            .from('posts')
            .select()

    console.log(data)
    console.log(error)
}
loadData()
```
Here we make an async function named loadData, and use supabase js API to select everything on our 'posts' table and store it in data. If something goes wrong, it'll shown in error variable.

Open your console and see your data there


## Display in on browser

Now, instead of logging the data, let's display our data in the browser. So user can see it.
Create a new div as a holder
```
<div id="holder"></div>
```


