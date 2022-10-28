---
title: "My cypress setting to run with GUI or not"
description: "Sometimes you want to see your test running with GUI, but sometimes not, you just want run CLI and see the test results. Here is my package json setup"
date: 2022-10-28T02:37:00.000Z
topic: [cypress, testing]
series: [""]
draft: false
---
Sometimes you want to see your test running with GUI, but sometimes not, you just want run CLI and see the test results. Here is my package json setup

package.json
```
"scripts": {
        ...
        "test": "cypress run",
        "test-visual": "cypress open"
    },
```


This way I can easily trigger the test with command npm/yarn , depend if I want to use GUI or not

Or if you want to do it manually

To run the test itself, we can run
```
cypress run
```
But to open a GUI
```
cypress open
```

