---
title: "Disable video recording when running Cypress"
description: "How to Disable video recording when running Cypress run test on you project"
date: 2022-10-28T02:30:00.000Z
topic: [cypress, testing]
series: [""]
draft: false
---
When you're using `cypress run` to run test without GUI, [Cypress](https://www.cypress.io/) will automatically generate a videos of your test at cypress/videos folder. It's a good thing, especially when the test failed, so you can see what happen actually while running your test.

## How to disable the video recording
To disable the video, go to `cypress.config.js` file and add video: false attribute
```
import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    video: false,
})
```

## It won't fill much of your disk space
If you're worried that it will take many spaces, don't worry. By default, even if the video is on(true), It has "trashAssetsBeforeRuns" which will remove the recorded assets before we run our next test. This setting also configurable on cypress config if we want to persists the assets

## Other tips
In case you still want to see the videos of your test. But don't want to push it on your git repository , we can ignore this files in .gitignore
```
/cypress/screenshots/
/cypress/videos/
```

*above sample, when you want to ignore screenshots as well.
