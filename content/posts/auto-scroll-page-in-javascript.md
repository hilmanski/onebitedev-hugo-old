---
title: "Auto Scroll page in Javascript"
description: "Do you have a really long page that you wish will scroll down automatically using javascript? or do you want to make this as feature for your website visitor?"
date: 2022-07-22T02:13:00.000Z
topic: [javascript]
series: [""]
draft: false
---
Here is the snippet using scrollBy() method in Javascript.
You can try this out directly by opening "right click -> inspect tab -> console"  and paste this on that tab

```
function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,100);
}

pageScroll()
```

Feel free to play with the speed by change the number 100 there


