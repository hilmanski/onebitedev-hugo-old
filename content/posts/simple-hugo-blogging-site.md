---
title: "Simple Hugo Blogging Site"
description: "How to make a simple hugo website for blogging with tagging or category system."
date: 2019-03-30T05:43:40+08:00
topic: ["hugo"]
series: ["Hugo website to the next level"]
---

I always search for something simple for any of my problem. Just like every developer who wants to start a blog, deciding which platform to use is really hard. For me, the criteria are something hackable and fast for the reader. Luckily, I met Hugo! The claim “The world’s fastest framework for building websites” they put in their landing page is an honest slogan! I've got a very good experience so far with Hugo (I’ve tried Jekyll, Nuxt, Next).

Now I'd like to share how this site (at this time) made with Hugo. You'll learn how to create a simple blogging site with tagging system in Hugo.

## Hugo installation
For mac users just run
```
brew install hugo
```

For windows, [check this page](https://gohugo.io/getting-started/installing)

To create a new site
```
hugo new site quickstart
```  
  
You could add a theme just like the [getting-started guide suggests](https://gohugo.io/getting-started/quick-start/) or if you're like me, let's start making our own theme. Since I don't want to keep changing my blog's theme, instead creating a theme folder, I'll just change the layout directly.

## My theme structure
In my case, I want to make a simple blog with a tag system. It will have an index page, single post page and category page, where each of the posts will have a tag(s)
```
layouts
    _default
        baseof.html
        list.html
        single.html
    partials
        header.html
        footer.html
    index.html
static
    css
        main.css
    img
    js
```

## Start from landing page
Let's explore from our landing page, index.html, which render all the posts
```
{{ define "main" }}

    <main>
        <ul id="post">
          {{ range .Pages }}
          <div class="posts">
             <h3 class="title"> <a href="{{.Permalink}}"> {{.Title}} </a></h3>
             <p class="desc">{{.Summary}}</p>

             <ul class="tags">Tags:
                 {{ range .Params.tags }}
                   <li class="tags-{{.}}"><a href="/tags/{{.}}">{{ . }}</a> </li>
                 {{ end }}
             </ul>
          </div>
          {{ end }}
         </ul>
    </main>

{{ end }}
```

## Template layout in _default
Now move to "_default" folder, which contains all our layout for the pages.
baseof.html is the page that Hugo always renders, so what we did here, is just add a header, footer and the main block.
Later we just call this baseof template everywhere. So our header and footer template will automatically be rendered.

Notice block main below, is the same name we define our "main" at landing page

baseof.html
```
{{ partial "header.html" . }}
{{ block "main" . }} {{ end }}
{{ partial "footer.html" . }}
```

## Show single page in Hugo
Single.html with responsible for the single post/pages, all the id/class is optional.
```
{{ define "main" }}

<section id="main">
  <h1>{{ .Title }}</h1>
  <article> {{ .Content }} </article>
</section>

//render tag and date
<aside id="meta">
    <section>
        <li> {{ .Date.Format "Mon Jan 2, 2006" }} </li>
        <ul class="tags">Tags:
            {{ range .Params.tags }}
              <li class="tags-{{.}}"><a href="/tags/{{.}}">{{ . }}</a> </li>
            {{ end }}
        </ul>
    </section>
</aside>
{{ end }}
```

## Listing page in Hugo
Now move to the List page, which will responsible for our category page.
At your 'list.html'

```
{{ define "main" }}

    <main>
        //to grab which category we're in (get by split the last URL)
        {{ $lastUrlElement := index (last 1 (split (delimit (split .URL "/") "," "") ",")) 0 }}
        <h2>{{humanize $lastUrlElement}} </h2>

        //loop all pages
        <ul id="post">
          {{ range .Pages }}
          <div class="posts">
             <h3 class="title"> <a href="{{.Permalink}}"> {{.Title}} </a></h3>
             <p class="desc">{{ .Summary }}</p>

             <ul class="tags">Tags:
                 {{ range .Params.tags }}
                   <li class="tags-{{.}}"><a href="/tags/{{.}}">{{ . }}</a> </li>
                 {{ end }}
             </ul>
          </div>
          {{ end }}
         </ul>
    </main>

{{ end }}
```

## Partial content in Hugo 

Partials folder will contain any content that we want to use many times, just like header and footer, it could be very different for each of us

Header.html
```
<!DOCTYPE html>
<html lang="id">
<head>
    <title> {{ .Title }} </title>
    <meta name="description" content="{{ if .Description }}{{ .Description }}{{ else }}{{ .Site.Params.Description }}{{ end }}" property="og:description">
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header> MySite </header>
```

Footer.html
```
    <p>Just footer</p>
</body>
</html>
```

## Static page at Hugo

Static files like js, css or images will stay in "static" folder
reference it later, just like you do normally

example
```
<link rel="stylesheet" href="/css/main.css">
```

## Config file at Hugo

Finally, here is my config.yaml (or .toml) file

```
baseURL : YOUR BASE URL
languageCode : en
title : main page title

params:
    description: main page description

staticDir: static

permalinks:
  posts : /:title/

summaryLength: 25
```

With this configuration my site will be served like this
all post directly in "mysite.com/title"
all category page in "mysite.com/tags/catname"

## Try it now
Just run "hugo server" to see your site in action
That's it, happy blogging!

You can also check [how to deploy and host hugo for free here](https://onebite.dev/how-to-deploy-and-host-hugo-in-github-pages/)