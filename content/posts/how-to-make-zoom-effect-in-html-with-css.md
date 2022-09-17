---
title: "How to make zoom effect in HTML with CSS"
description: "Learn how to make zoom effect in HTML with CSS. We will play with scale transformation on CSS to make the element chosen bigger/smaller"
date: 2022-09-18T02:33:00.000Z
topic: [HTML, CSS, javascript]
series: [""]
draft: false
---
Let's learn how to make zoom effect in HTML with CSS. We will play with scale transformation on CSS to make the element chosen bigger/smaller

The properties we need to set are:
```
 transform: scale(1);
 transformOrigin: 0% 0% 0px;
```

- transform accept float value with 1 as default size. You can go step by step with 1.1 to 2. 
- transformOrigin will set the the position with top left as anchor. So our element not moving.

## Play with button zoom in and out
Now we just need to add a javascript function for this.

```
<button onclick="zoomIn"> zoom in </button>
<button onclick="zoomOut"> zoom out </button>

<div id="content">
 Content
</div>
```

Now for the script
```
<script>
let scaleLevel = 1; // default
function zoomIn() {
    scaleLevel = scaleLevel + 0.2 //increase level
    document.getElementById('pdf-viewer').style.transform = `scale(${scaleLevel})`
}

function zoomOut() {
    scaleLevel = scaleLevel - 0.2 //increase level
    document.getElementById('pdf-viewer').style.transform = `scale(${scaleLevel})`
}
</script>
```

- Feel free to refactor the function, since we're doing the same thing on the second line.
- We can also give limit to each action, by return before scaling it,
