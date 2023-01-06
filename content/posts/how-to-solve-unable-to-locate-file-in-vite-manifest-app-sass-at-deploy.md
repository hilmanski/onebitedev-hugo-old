---
title: "How to solve  Unable to locate file in Vite manifest app sass at deploy"
description: "I got an error that says  Unable to locate file in Vite manifest: resources/sass/app.sass when deploying my laravel app - here is how I solve it"
date: 2023-01-05T18:25:00.000Z
topic: [laravel, vite]
series: [""]
draft: false
---
When deploying my laravel site that use Vite and sass (CSS-preprocessor), I got this error 
" Unable to locate file in Vite manifest: resources/sass/app.sass"

Turns out, I need to update the vite config file

```
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.sass', 
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});

```
To that. or whatever the name of your sass file is 
