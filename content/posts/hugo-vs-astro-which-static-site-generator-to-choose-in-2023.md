---
title: "Hugo vs Astro - which static site generator to choose in 2023"
description: "Which static site generator to choose in year 2023? should you pick the newcomer Astro or Hugo that been here for a while"
date: 2023-02-06T21:18:00.000Z
topic: [astro, hugo]
series: [""]
draft: false
---
Which static site generator to choose in year 2023? should you pick the newcomer Astro or Hugo that been here for a while.

> TLDR;  
> I have built many sites with Hugo, but I still struggle with the things like integrating 3rd party tools or create a complex query/filter.   
> Currently, I am trying to migrate a site from Hugo to Astro and I absolutely love the overall experience. So for now, I definitely choose Astro as my main SSG.  
> Astro uses JSX syntax, so if you come from a background in React or a similar front-end framework, it will feel like home

If you're not familiar with [benefits of static site generator](https://gohugo.io/about/benefits/), feel free to read it first. In general, static site generator are most suitable for content-heavy website, like blogs posts, marketing pages, etc.

## Principle

First, let's see what each of their selling point.

Hugo: "The world’s fastest framework for building websites"   
Astro: "Build faster websites.".

Both have word "fast" in it. What is the different?  

Hugo **focus** on making the building process VERY FAST.   
Astro **focus** on making the website VERY FAST.   

Or at least, that's what we can get from their landing page. On reality of course, both framework are:
- very fast on building/generating site 
- produce very fast website

You may only notice the different, once you're building A LOT OF PAGES. 

From experience, I can immediately see the improvement on [lighthouse score ](https://developer.chrome.com/docs/lighthouse/overview/) when building site with Astro. 

## Documentation
Both Astro and Hugo have a detail documentation that covers all it's features.

I would give a bonus point for [Astro on having a "tutorial" with clear step by step](https://docs.astro.build/en/tutorial/0-introduction/) to help people start using it.

## Templating and Query
- Hugo uses Go’s html/template and text/template libraries as the basis for the templating.
- Astro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience

For someone experienced with React or similar front end framework, Astro will feel like home. 

Even after using Hugo for a while, I still struggle on doing multiple conditionals or complex filters on contents. This one of course could be very subjective.

Simple example on rendering pages in Hugo
```
<html>
  <body>
    {{ range where .Pages "Type" "post" }}
	{{ .Title }}
    {{ end }}
  </body>
</html>
```


Simple examples on rendering pages in Astro using content-collection (introduced on Astro v2)
```
---
import { getCollection } from 'astro:content';
const blogEntries = await getCollection('blog');
---
<ul>
  {blogEntries.map(blogPostEntry => (
    <li>
      <a href={`/post/${blogPostEntry.slug}`}>{blogPostEntry.data.title}</a>
    </li>
  ))}
</ul>
```

## Integrating with other tool
For me, Astro is a clear winner for this. I feel it's very hacky to integrate other tools like Tailwind on Hugo. Meanwhile, Astro has dedicated page and method on [how to integrate 3rd party tools](https://docs.astro.build/en/guides/integrations-guide/).

Hugo has a  bonus point on having automatic RSS and Sitemap out of the box, while with Astro, we need to "install" it first, although it's very straightforward.

## Content resources
Both tools can render static markdown files as resources. 

But Astro has the ability to render a dynamic content, with it's [server side rendering method](https://docs.astro.build/en/guides/server-side-rendering/).

*feel free to correct me and provide me a link so I can update this blog post, on how to do "dynamic" content with Hugo.

## Extending markdown
Both are capable to extend a normal markdown functions.

Hugo use [shortcode](https://gohugo.io/content-management/shortcodes/) to extend it. You can use some predefines shortcodes or just create it manually. 

Astro can use [mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)  to create a custom component. 

I would say Hugo is more natural on approaching this "external component", while with Astro we need to install and import it first. 

## Routing
In Hugo, we can set the "permalinks" on hugo configuration files. 

In Astro, it works like Nextjs, which based on where we create the location relative to `/pages ` folder. But we're still able to oeverwrite it via `slug's` frontmatter, Or create a dynamic routing with the square bracket syntax.

## Other notes

On it's v2,  Astro introducing [content collection](https://docs.astro.build/en/guides/content-collections/)  , which can use "type safe" schema collection, where we can define the schema of our frontmatter once, then having a proper warning/error message when we don't create content accordingly.

## Conclusion
I realize that I'm more inclined towards Astro, because that's just how I feel after using it. Feel free to add any point that I'm missing, either it's a good thing for Hugo or Astro. Hope it's useful!
