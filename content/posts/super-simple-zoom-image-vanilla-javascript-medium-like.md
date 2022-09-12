---
title: "Super simple Zoom image vanilla javascript medium like"
description: "I need an ability to zoom images on my site. Luckily I found this javascript plugin by Tholman that very easy to use."
date: 2022-09-12T01:20:00.000Z
topic: [javascript]
series: [""]
draft: false
---
I need an ability to zoom images on my site. Luckily I found this javascript plugin by Tholman that very easy to use.

The library called "Intense Images"
[Github Repo](https://github.com/tholman/intense-images)

Here's how I use it:
1. Load from CDN
```
<script src="https://cdn.jsdelivr.net/npm/lightense-images@1.0.17/dist/lightense.min.js"></script>
```

2. Assign your elements
```
<script>

  window.addEventListener('load', function () {
    Lightense('img');
  }, false);
</script>
```
Done that's it!

To change only certain element, change your 'img' with any elements indicator, either by id, class or tag name.
For example, if you want the images only zoomable on a certain id, then..
```
  window.addEventListener('load', function () {
    Lightense('#certain-div img');
  }, false);
```

To change the default behavior, look at [this documentation](https://sparanoid.com/work/lightense-images/)


