---
title: "Display a list of post based on a category or tag in Hugo "
description: "Learn how to display a list of post based on a category or tags in Hugo . This is not for normal category page, since Hugo will sorted it out for you out of the box. This is for when you want to display certain list on a random page"
date: 2021-09-04T22:34:00.000Z
topic: [hugo]
series: [""]
draft: false
---
Learn how to display a list of post based on a category or tags in Hugo . This is not for normal category page, since Hugo will sorted it out for you out of the box. This is for when you want to display certain list on a random page, not on a listing page

```
    {{ range .Pages }}
             {{ if in .Params.tags 'oneOfyourTag' }}
                        //... display it normally here
          {{ end }}
    {{ end }}
```

In the example code above, I range all of the pages and with conditional statement,  
We check if a string of parameter (change whatever your string is at 'oneOfyourTag') is in a param

I don't think this is the ideal solution, since it's loop every page  
I still try to figure out if we can make on "one query"


