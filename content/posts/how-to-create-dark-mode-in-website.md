---
title: "How to Create Dark Mode in Website"
description: "Learn how to create a dark mode website for your website. It's actually easier that you think"
date: 2019-03-30T09:38:40+08:00
topic: ["html", "css", "javascript"]
---

Oftentimes we see a dark mode in website. For me personally, I can't stare too long on a bright screen, that's why I prefer dark mode for some websites. And as a developer, it's hard not to think "how is it made?".

## CSS preparation

First, we need to prepare the CSS, both for normal condition and case when it's in dark mode
```
body{
    /*your normal styling*/
}
body.darkmode {
    background: rgb(57, 57, 57);
    color: rgb(227, 227, 227);
}
/*to toggle button*/
.is-hidden{
 display: none;    
}
```

## Toggle via javascript
We'll toggle the class via a button or text with javascript

HTML button
```
<div id="theme">
     <div onclick="setDarkMode(true)" id="darkBtn" class="">  <span>Dark</span></div>
    <div onclick="setDarkMode(false)" id="lightBtn" class="is-hidden"> <span>Light</span> </div>
</div> 
```
Script for button
```
<script>
 function setDarkMode(isDark) {
        var darkBtn = document.getElementById('darkBtn')
        var lightBtn = document.getElementById('lightBtn')

        if(isDark) {
            lightBtn.style.display = "block"
            darkBtn.style.display = "none"
        } else {
            lightBtn.style.display = "none"
            darkBtn.style.display = "block"
        }

        document.body.classList.toggle("darkmode");
    }
</script> 
```

## Save it for next visit

Finally to make things easier for user who visit our site for N+1 times, save the theme in localstorage (web feature).
```
<script>
 function setDarkMode(isDark) {
 //check localstorage
 if(localStorage.getItem('preferredTheme') == 'dark') {
     setDarkMode(true)
 }

 function setDarkMode(isDark) {
     var darkBtn = document.getElementById('darkBtn')
     var lightBtn = document.getElementById('lightBtn')

     if(isDark) {
         lightBtn.style.display = "block"
         darkBtn.style.display = "none"
         //add to localstorage
         localStorage.setItem('preferredTheme', 'dark');
     } else {
         lightBtn.style.display = "none"
         darkBtn.style.display = "block"
         //add to localstorage
         localStorage.removeItem('preferredTheme');
     }

     document.body.classList.toggle("darkmode");
 }
</script> 
```

