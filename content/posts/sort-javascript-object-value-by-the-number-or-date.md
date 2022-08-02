---
title: "Sort Javascript Object Value by the number or date"
description: "Do you need to sort your object by one of the key value by the number? start from highest or lowest number? We can use javascript sort function fort that. Here is how"
date: 2022-08-02T23:39:00.000Z
topic: [javascript]
series: [""]
draft: false
---
Do you need to sort your object by one of the key value by the number? start from highest or lowest number? We can use javascript sort function fort that. Here is how

For example we have this object

```
const items = [
  { name: 'Nami', score: 5 },
  { name: 'Zolo', score: 1 },
  { name: 'Luffy', score: 10 },
  { name: 'Sanji', score: 4 },
];
```

Let’s make a function to sort this items
```
items.sort(function (a, b) {
  return a.score - b.score;
});
```

Warning:  
Change `score` with any of your column's name  

If you put it in separate function don’t forget to return the items
```
return items
```





