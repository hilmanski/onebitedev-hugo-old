---
title: "Waiting for element exists in Cypress instead of time"
description: "Here is how to wait for a certain element until exists in Cypress instead of time"
date: 2022-10-21T17:44:00.000Z
topic: [cypress, testing]
series: [""]
draft: false
---
Here is how to wait for a certain element until exists in Cypress instead of time.

We can use the combination of .get() method and should(). For example
```
  before(() => {
      cy.visit('http://localhost:3000/')
      cy.get('canvas').should('be.visible')
  })
  
it('...', ()=>{
...
})
 ``` 

In above sample, I wait until a canvas element is ready on my page, before I run other funciton.

This is perfect for me , who used time instead, I need to wait for a few seconds when waiting for a dynamic component / element on my page.

So instead of hardcode-typing amount of milliseconds . I wait for the element I really need, then continue to the code I want
