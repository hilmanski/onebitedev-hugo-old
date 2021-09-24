---
title: "Hover effect on 5 star rating systems"
description: "This is my solution on how to make a Hover effect on 5 star rating systems"
date: 2021-09-23T20:03:00.000Z
topic: [javascript]
series: [""]
draft: false
---
This is my solution on how to make a Hover effect on 5 star rating systems

## Drawing stars

You can use an image, or generate SVG like this
```
//Your HTML content
 <div id="ratingstar-submission"></span>

//In your javascript file
$('#ratingstar-submission').innerHTML = drawStarsSVG()
//========================
//Draw 5 stars
//========================
function drawStarsSVG() {
    let stars = ''
    for (let i = 0; i < 5; i++) {
        stars += ` <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.5 0L20.9664 7.71885L30.2414 10.3647L24.3448 17.7812L24.6107 27.1353L15.5 24L6.38933 27.1353L6.65517 17.7812L0.758624 10.3647L10.0336 7.71885L15.5 0Z"
                    fill="#C4C4C4" />
            </svg>`
    }

    return stars
}
```

## Hover effect to highlight previous stars

```
//================================================
//Hover effect on rating star submission
//================================================
let rating_nr = 0
const ratingstar_submission = $('#ratingstar-submission').querySelectorAll('path')
ratingstar_submission.forEach((item, index) => {
    item.addEventListener('mouseenter', function () {
        rating_nr = index + 1
        for (let i = 0; i < 5; i++) {
            if (i < index + 1) {
                ratingstar_submission[i].style.fill = '#FDCE6E'
            } else {
                ratingstar_submission[i].style.fill = '#C4C4C4'
            }
        }
    })
})
```

## Explanation
We will store the value of choosen rating in variable `rating_nr`  
We give 'mouseenter' event (same as hover) on each of this SVG path (or image if you use images).  
As long as a star (image/svg) is hovered, we look at it's index and change the color of all previous stars



