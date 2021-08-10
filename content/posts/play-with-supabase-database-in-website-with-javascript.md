---
title: "Play with Supabase database in website with Javascript"
description: "Learn how to create and read Supabase database via it's API with Javascript on a website. We will use in browser javascript to load the data and display it on our HTML page."
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
const SUPABASE_URL = 'https://YOURURL.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR-KEY-FROM-SUPABASE'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
</script>
```

## Load data

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

Now change our loadData function to insert our data to holder
```
async function loadData() {
    const { data, error } = await _supabase
            .from('posts')
            .select()

    if(!error) {
        //loop display data here
        const parent = document.getElementById('holder')

        let contents = ''
        data.forEach(function(item){
            contents += `<div> ${item.title} - ${item.tag}</div>` 
        })

        parent.insertAdjacentHTML('beforeend', contents)
    }
    
}
```

## Create new entry

Now, let's test our insert query
```
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
```

If you check at table editor, your new data is there.

## Security consideration

If you notice, we just insert a new Data in our database. For some type of application it's totally fine. 
But think about it again.. if everyone copy paste our script and run it.. they can manipulate our database just like what we did before.

Hmm... is Supabase secure?
The answer is yes.. Supabase is secure. Normally you only use it with server side application, so your KEY and other secret stuff is safe there. 
But, if you only need a client side for you application, you can secure your application by using [Row Level Security](https://supabase.io/docs/learn/auth-deep-dive/auth-row-level-security), which we'll talk in another article.


