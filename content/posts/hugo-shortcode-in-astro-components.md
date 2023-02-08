---
title: "Hugo shortcode in Astro Components"
description: "Migrating my site from Hugo to Astro, requires me to find out what is a Hugo shortcode relevant in Astro statice site generator"
date: 2023-02-05T17:53:00.000Z
topic: [astro]
series: [""]
draft: false
---
Migrating my site from Hugo to Astro, requires me to find out what is a [Hugo shortcode](https://gohugo.io/content-management/shortcodes/) relevant in Astro statice site generator.

## Astro shortcode-like
Astro components is what I'm looking for. We can make a "component" (in terms of modern front end javascript library) and use it in our astro file or markdown file.

Read about [astro components](https://docs.astro.build/en/core-concepts/astro-components/).

Now is the fun part.. How to use it? 

## Create a component file
We'll talk about the detail on separate post. But in a nutshell, we create a component file using JSX syntax with '.astro' extension. 

For example, my figure component looks like this
```
---
export interface Props {
	src: string;
	alt?: string;
	width?: string;
    height?: string;
    title?: string;
}

const { src, alt, width, height, title } = Astro.props;
---

<figure>
    <img src={src} 
         alt={alt} 
         width={width} 
         height={height} />
    <figcaption> {title} </figcaption>
</figure>
```

In between `---` is where we declare any "logic" or accepting a parameter to make this component dynamic.

The rest is normal HTML with ability to inject  `{variable}` which coming from the setting above.

## How to use Astro component in markdown file? 

We need to use [mdx](https://mdxjs.com/) for this. Think of `mdx` as markdown with superpower. 

1. Install mdx on Astro
    [read how to install mdx in Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/)

2. Import the Component on you `.mdx` files  (remember to change your `.md` extension to `.mdx`).

    Put the import code outside the `frontmatter` section
    ```
    ---
    //frontmatter sutff
    ---
    import Mediacontent from '../components/Mediacontent.astro';
    ```

3. Use the component
    If you're familiar with React, then this should be familiar
    ```
    <Mediacontent src="https://fielsource.com/" alt="alt text" title="title text" height="150" />
    ```