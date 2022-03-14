---
title: "Laravel empty relation when eager loading"
description: "Today I faced a problem, where Laravel shows empty results when query a relation with eager loading. Found the solution, it was I forgot to select the id as well, so the relation didn't know what connects the second table with."
date: 2022-03-14T00:11:00.000Z
topic: [laravel]
series: [""]
draft: false
---
Today I faced a problem, where Laravel shows empty results when query a relation with eager loading. Found the solution, it was I forgot to select the id as well, so the relation didn't know what connects the "second table" with.

So the culprit was, when I query a data by select specific columns
```
 return Product::with(['tags','reviews'])
                        ->select('title', 'logo', 'snippet', 'slug')
```

I need to select the id as well
```
 return Product::with(['tags','reviews'])
                        ->select('id', 'title', 'logo', 'snippet', 'slug')
```





