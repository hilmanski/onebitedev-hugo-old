---
title: "Sort javascript Object value alphabetically"
description: "Do you need to sort your object by one of the key value alphabetically? We can use javascript sort function fort that. Here is how"
date: 2022-08-02T23:35:00.000Z
topic: [javascript]
series: [""]
draft: false
---
Do you need to sort your object by one of the key value alphabetically? We can use javascript sort function fort that. Here is how

For example we have this object
```
const items = [
  { name: 'Nami', value: 5 },
  { name: 'Zolo', value: 5 },
  { name: 'Luffy', value: 10 },
  { name: 'Sanji', value: 4 },
];
```

Let's make a function to sort this items
```
// sort by name
items.sort(function(a, b) {
  // we make sure to compare a and b equally by turn to uppercase
  const itemA = a.name.toUpperCase(); 
  const itemB = b.name.toUpperCase(); 
  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

Warning:  
Change `name` with any of your object's key's name  

If you put it in separate function don't forget to return the items
```
return items
```





