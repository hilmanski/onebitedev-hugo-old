---
title: "Migrating Hugo site to Astro"
description: "A long time Hugo fans here. I still struggle on doing query, routing or filtering. I tried Astro and really love it. Here is how you can migrate too"
date: 2023-02-07T23:35:00.000Z
topic: [astro, hugo]
series: [""]
draft: false
---
I've been a long time Hugo fans. But I still struggle on doing certain query, routing or filtering on template in Hugo. I tried Astro and really love it. Here is how you can migrate too

> **WARNING**
> - Don't move if you're already satisfied and don't have any problem with Hugo.
> - If you're working for a long term project AND used to work with react/js environment, give Astro as a shot

Read here, if you're looking a simple [comparation between Hugo and Astro](https://onebite.dev/hugo-vs-astro-which-static-site-generator-to-choose-in-2023/)

> **Disclaimer**
> it's not as simple as running one command line. You need to do your work for understanding astro first (you'll need it sooner or later) and do some manual work

## List all your Hugo routes
To make sure, you're successfully doing the migration. Try to list all current routes you have.
For example:
```
/ homepage
/post/{slug} single post
/tag/{tag} tag page
...
etc.
```

once you're finished with your Astro implementation later, verify you have all the routes back.

## Prepare a new project
First, create a completely fresh project/directory where you'll install your Astro site.
Follow clear [tutorial from official Astro docs on getting started](https://docs.astro.build/en/install/auto/)

## Make yourself familiar with Astro's Content Collection
Astro v2 introduce a new concept called ["content-collection".](https://docs.astro.build/en/guides/content-collections/) . Skim through the doc.

In short, it's a new and best way to work with Markdown and make it very flexible while still having a type-safety

## Copy your markdown content
At your Hugo site, copy all your markdowns, feel free to copy based on folder (if you have multiple types). 
Then in your Astro project, paste it at `src/content` make sure your files are wrapped on a folder(s).

Reminder: Astro using YAML format.

## Optional (add type safety)
If you want a consistent frontmatter's accross all your markdowns, (it can be unique for each folder/types) . [Implement a schema collection](https://docs.astro.build/en/guides/content-collections/#defining-collections) , follow this part.

## Fix errors
Try to run your astro site, if there's any error. Especially if you implemented the schema collection, you'll get a clear message, where the problem is. Fix each of this errors on file. 

## Implement your template in Astro
Everyone have a different template / route structure.
Astro use similar approach to Nextjs on how the `routing` works. You may need to make yourself familiar with the routing system first.

You can start from homepage, then slowly build your needed routes.

If you need a template for [querying all posts from collection, check this part](https://docs.astro.build/en/guides/content-collections/#querying-collections)

## Migrate your shortcode
Hugo use shortcode to extend markdown. While Astro using component concept. 
Here's a guide and sample, on [what shortcode Hugo looks like in Astro's collection](https://onebite.dev/hugo-shortcode-in-astro-components/).

## That's it
Hope you're having fun with your new Astro site!




