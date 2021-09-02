---
title: "Display or filter a list of post based on a category or tag in Hugo"
description: "Learn how to display a list of post based on a category or tags in Hugo . This is not for normal category page, since Hugo will sorted it out for you out of the box. This is for when you want to display certain list on a random page"
date: 2021-09-04T22:34:00.000Z
topic: [hugo]
series: [""]
draft: false
---
Learn how to display a list of post based on a category or tags in Hugo . This is not for normal category page, since Hugo will sorted it out for you out of the box. This is for when you want to display certain list on a random page, not on a listing page

```
 <ul>
      {{ range where .Site.RegularPages ".Params.tags" "intersect" (slice "ANYTAG")}}
      <li>
        <a href="{{ .Permalink }}">{{ .Title }}</a>
      </li>
      {{ end }}
    </ul>
```

change "ANYTAG" with your own tag string


