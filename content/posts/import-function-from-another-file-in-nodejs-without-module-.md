---
title: "Import function from another file in NodeJS without module "
description: "If you need to add an external function from other file into a nodejs file without changing the type into module type you can use this commonJS method"
date: 2023-01-12T20:24:00.000Z
topic: [javascript, nodejs]
series: [""]
draft: false
---
If you need to add an external function from other file into a nodejs file without changing the type into module type you can use this commonJS method

You can learn it 'officialy' [about commonJS in Nodejs here in the official doc](https://nodejs.org/docs/latest/api/modules.html)

## How to export function from another file

Let's say I have a function to return a random name on a helper function.
I put it on ./src/utils/helper.js
```
function _getRandomName() {
    const randomName = Math.random().toString(36).substring(7) + '-' + Date.now()
    return randomName
}

// Important Part
module.exports = {
    _getRandomName
}
```


The very important part here is the `module.exports` where we list variable or function that we want to export to be used on other file

## How to import function from another file

Not to use this function, let's say on my server.js file that located in `./src/server.js` is like this

```
const { _getRandomName } = require('./utils/helper')
```

Now you can use this helper function everywhere on server file

## Add multiple functions ?
You can add the function name between the curly brackets, both, in the export and require part.
