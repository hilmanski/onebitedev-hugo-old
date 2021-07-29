---
title: "How to Draw Text in Html Canvas"
date: 2019-03-30T06:00:02+07:00
description: "Let's learn how to draw a text with HTML canvas"
topic: ["html", "javascript", "canvas"]
series: ["Exploring HTML Canvas"]
---

In case you haven't heard about canvas in HTML, this element enable us to draw something on web, by something, it includes text. Why would you want to draw text in canvas, instead just show it normally? well, the case could be like "displaying a captcha image", so bot can't just grab the text via html element to bypass our captcha.

## Prepare a canvas to draw
```
<canvas id="myCanvas" width="200" height="200">
Fallback text if  browser doesn't support the canvas el.
</canvas>
```

## Connect canvas
Let's connect our canvas and learn how to draw a text in it
```
//connect our canvas element with javascript
var canvas = document.getElementById("myCanvas");

//context is how we connect the canvas itself with things we want to draw
var ctx = canvas.getContext("2d");

//Choose your font style and size
ctx.font = "20px Arial";

//Dispay text, with starting position
//2nd argument is X pos, 3rd is Y pos
ctx.fillText("Safe Captcha",10,50);
```

## Text color canvas
What about the text-color in canvas? it could be the color's name or hexacolor or rgb
```
ctx.fillStyle = "blue";
```

## Centering text in canvas
How to draw text in center of my canvas?
to do this we can get the canvas width and height and then divided both with 2 as our starting draw position. But don't forget to use text align center, because we wont the points as our center position not as starting position.
```
ctx.textAlign = "center";
ctx.fillText("Safe captcha", canvas.width/2, canvas.height/2);
```




