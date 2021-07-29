---
title: "Series of article in Hugo website"
description: "Learn how to add series for your article in Hugo. This way we can group multiple post on a certain topic or series"
date: 2021-07-28T20:46:00.000Z
topic: [hugo]
---
Learn how to add series for your article in Hugo. This way we can group multiple post on a certain topic or series

## Set up series in config

In your configuration e.g. config.toml, add this to taxonomy blog
```
[taxonomies]
    tag = "tags"
    category = "categories"
    series = "series"
```


## Give series to a post
To group your post into a series, put series tag in your markdown file, in parameter section
```
series: ["My first series"]
```

## Your series List
If you want to see your list of series, go to `/series`
it's coming from list.html page

## Display related content in a single page

If you need to display all other related content in Hugo website, you can use this snippet. I forgot on which blog I got this snippet (will update the link when I remember)
```
 {{ if .Params.series }}
    {{ $name := index .Params.series 0 }}
    <br><hr/><br>
    <p>This is a post in the <a class="is-pink" href='/series/{{$name | urlize }}'>{{$name}}</a> series. </p>
    <br/>
      {{ $name := $name | urlize }}
      {{ $series := index .Site.Taxonomies.series $name }}
      <ul class="series">
      {{ range sort $series.Pages "Date" }}
        <small> <li>{{.Date.Format "Jan 02, 2006"}} - <a class="is-pink" href="{{.Permalink}}">{{.LinkTitle}}</a></li></small>
      {{end}}
      </ul>
  {{end}} 
```

## Display all series

Do you need to display all your series in Hugo website in certain page?
```
{{ range $name, $taxonomy := .Site.Taxonomies.series }}
        {{ with $.Site.GetPage (printf "/series/%s" $name) }}
        <li><a class="is-pink capitalize" href="{{ .Permalink }}">{{ $name | humanize }}</a></li>
        {{ end }}
    {{ end }}
```

*meta: how to display series of article in Hugo website, how to show related content in Hugo, how to list all series in Hugo*


