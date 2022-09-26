---
title: "Nested multiple condition on ReactJS"
description: "How to have a multiple if else condition in ReactJS template that depends on multiple set state variable or just in general"
date: 2022-09-26T01:53:00.000Z
topic: [react]
series: [""]
draft: false
---
How to have a multiple if else condition in ReactJS template that depends on multiple set state variable or just in general.

```
{
    isLoading 
    ? 'Please wait...' 
    : <>
        { registerMode ? 'Join for free' : 'Login' }     
        </>
}
```

In above example I have two variables: isLoading and registerMode . Both have boolean values. 
If isLoading is true, then only show please wait.. while if it's not on loading, it will depend on the value of regsterMode itself.
