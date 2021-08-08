---
title: "How to update useState value based on new value reactjs"
description: "Learn how to update useState value based on new value reactjs. I encountered a problem, where I can't manipulate newest addition on my array that using useState in react"
date: 2021-08-08T22:55:00.000Z
topic: [react]
---
When you update / set new state via React useState, it runs asynchronously. Yesterday, I spent a lot of times, why when I add 'new things' on my array state, I can't immediately update it. It's all because the asynchronous "feature".

My state didn't recognize newest addition yet, until re-render happen.


## Get newest value from setValue useState

Luckily, we can get the newest state when updating the value, with the callback function inside our setValue
```
setSomething((state) => {
    console.log(state)
    return state;
});
```

## Update newest value in useState example

So here is how I solve this problem
As an example, assume I have a replies on a thread
```
const [selectedReply, setSelectedReply] = useState('')
```

Later I add new things on reply via
```
setReplyList(oldReplies => [...oldReplies, newReply])
```

here is how if we want to update the value immediately after adding new one. 
(Here  I update based on index, you can use other condition, maybe based on value, then index is not needed)

```
 const selectedIndex = 0
//callback to get newest state
setReplyList((state) => {
    let updatedReplies = []
    state.map((reply, index) => {
        //update id of newest reply added
        if (selectedIndex == index) {
            reply.id = data.reply.id
        }
        updatedReplies.push(reply)
    })

    return updatedReplies;
});
```


