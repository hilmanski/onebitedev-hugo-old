---
title: "Display categories or tag on meta data Hugo inside head tag"
description: "Yesterday I struggle with displaying a list of categories or tags inside a head tag of my Hugo project. I want to use this on my meta tag to make it more dynamic a.k.a better for SEO."
date: 2021-09-03T22:30:00.000Z
topic: []
series: [""]
draft: false
---
Yesterday I struggle with displaying a list of categories or tags inside a head tag of my Hugo project. I want to use this on my meta tag to make it more dynamic a.k.a better for SEO. 

Luckily I found a simple way to do it. The trick is using delimit to combine it as a string and wrap it inside "with" clause

```
{{ with .Params.tags }}{{ delimit . ", "}}{{ end }}
```

Want to save it on a string and reuse it later?
yes, you can
```
{{ with .Params.tags }}{{ $listtags = delimit . ", "}}{{ end }}
```

Now you can use $listtags by combine it with another string.
Learn how to [concatenate a string in Hugo](https://onebite.dev/how-to-concatenate-string-on-hugo-ssg/)


