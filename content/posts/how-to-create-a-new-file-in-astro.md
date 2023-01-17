---
title: "How to create a new file in astro"
description: "To create a new file in astro site generator, we just need to create a new file inside pages folder with .astro extension"
date: 2023-01-16T20:33:00.000Z
topic: [astro]
series: [""]
draft: false
---
To create a new file in astro site generator, we just need to create a new file inside pages folder with .astro extension

Location
```
|_ src
    |_ pages
        |_ index.astro (default)
        |_ yournewfile.astro
```

Now you can visit in your URL
localhost:3000/yournewfile

Astro automatically pick the file name as your route path

"Astro Components (.astro) and Markdown Files (.md) in the src/pages directory automatically become pages on your website." - [astro routing](https://docs.astro.build/en/core-concepts/routing/)
