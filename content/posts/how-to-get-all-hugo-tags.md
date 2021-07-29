---
title: "How to Get All Hugo Tags"
date: 2019-03-31T10:10:28+08:00
description: "How to get all hugo tags or taxonomy or category you use for your static website"
topic: ["hugo"]
series: ["Hugo website to the next level"]
---

If you need all the tags you currently use for your website built with Hugo, you can grab it from .Site.Taxonomis.tags. You can get the Permalink directly and the name itself.

```
<ul>
    {{ range $name, $taxonomy := .Site.Taxonomies.tags }}
        {{ with $.Site.GetPage (printf "/tags/%s" $name) }}
            <li><a href="{{ .Permalink }}">{{ $name }}</a></li>
        {{ end }}
    {{ end }}
</ul>
```

## Limit display at homepage only
Maybe you want to make this as your menu navigation that sticks in Homepage's header. Same code, just put an if-else clause to tell use, are we in homepage or not
```
{{ if .IsHome }}
<nav class="tags">
    {{ range $name, $taxonomy := .Site.Taxonomies.tags }}
        {{ with $.Site.GetPage (printf "/tags/%s" $name) }}
            <li><a class="tags-{{ $name }}"  href="{{ .Permalink }}">{{ $name }}</a></li>
        {{ end }}
    {{ end }}
</nav>
{{ end }}
```


