---
title: "Show future post in Hugo SSG"
description: "How to display future post in Hugo. We will see how you can render between published post and future post in hugo static site generator"
date: 2021-07-28T04:12:00.000Z
topic: [hugo]
series: ["Hugo website to the next level"]
---
Hugo is one of my favorite static site generator, it has so much built in future that makes it super flexible. Today we'll learn how to show future post in Hugo.

## Using if else Unix time

Our tools:
We have if else statement in Hugo
We have now.Unix time to get current time

Let's use both of them.

Assume you render your page like this
```
{{ range .Pages }}
        <li>
            <a href="{{.Permalink}}">{{.Date.Format "2006-01-02"}} | {{.Title}}</a>
        </li>
{{ end }}
```

We can add a condition to only render future post like this

```
{{ range .Pages }}
{{ if ge .Params.Date.Unix now.Unix }}
        <li>
            <a href="{{.Permalink}}">{{.Date.Format "2006-01-02"}} | {{.Title}}</a>
        </li>
{{ end }}
{{ end }}
```

- Watchout yours could be .date or .PublishedDate
- ge means greate equal (>=)

## Add buildFuture options

You have to add buildFuture option in your config.yaml/ .toml file
add this line
```
buildFuture : true
```


