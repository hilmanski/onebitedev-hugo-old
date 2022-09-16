---
title: "How to use typescript in existing NextJS project"
description: "I already have a running NextJS project but I want to start using typescript. Lets see how to add typescript in existing NextJS project"
date: 2022-09-15T20:57:00.000Z
topic: [nextjs, typescript]
series: [""]
draft: false
---
I already have a running NextJS project but I want to start using typescript. Lets see how to add typescript in existing NextJS project

> This setup tested in NextJS v12

## Create tsconfig.json file
Go to your project directory , then add new empty file tsconfig.json 
or via terminal
```
touch tsconfig.json
```

## Install typescript requirement on NextJS
Stop the server if it's currently running. Then run `yarn dev` or `npm run dev`. And you'll see what needs to be installed.

At this time of writing, we need to add types for react and node package. (Since Nextjs is consist of react and nodejs)
```
 yarn add --dev typescript @types/react @types/node
 ```
 
*change `yarn add` to `npm install` if using npm

You can see now your tsconfig.json file is filled with default options.

## Start with your typescript file!
Run `yarn dev` again and now your project is up and running.

By default js file will still works. To start leveraging typescript benefits, change your file with `.tsx` extension

You can learn about typescript [from the official website](https://www.typescriptlang.org/)

## Warning

From [official NextJS documentation](https://nextjs.org/docs/basic-features/typescript)

> TypeScript strict mode is turned off by default. When you feel comfortable with TypeScript, it's recommended to turn it on in your tsconfig.json


