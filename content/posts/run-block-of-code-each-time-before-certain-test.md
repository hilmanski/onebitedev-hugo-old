---
title: "Run block of code each time before certain test."
description: "Do you need to run same code / function each time running a test? We can automate it with beforeach"
date: 2022-10-21T17:47:00.000Z
topic: [cypress, testing]
series: [""]
draft: false
---
Cypress has a [very neat API](https://docs.cypress.io/guides/references/bundled-libraries), which is beforeach. 

```
context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
    // or do other thing instea
  })

  it('a', () => {
    ,,,
  })
  it('b', () => {
    ,,,
  })
})
```

In this sample, before running a and b, we'll visit the above URL first. Of course it's not just for visiting a URL, you can do anything on that block

## What if you only want to run before code once.
Maybe you can guess it, we just need to use `before` API instead of `beforeEach`. Usage is very similar
```
context('Aliasing', () => {
  before(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
    // or do other thing instea
  })

  it('a', () => {
    ,,,
  })
  it('b', () => {
    ,,,
  })
})
```

This way, we only load/do the block code inside before API once. then continue to the rest of the tests. It useful so we can save the state without repeating same process. 
