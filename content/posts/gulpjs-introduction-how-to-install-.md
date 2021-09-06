---
title: "GulpJS introduction, how to install "
description: "This post will be an introduction post on GulpJS. A toolkit to automate & enhance your workflow Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines."
date: 2021-09-06T22:34:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
As a frontend developer, our task is increasing  
It's not just writing HTML and CSS again.  

We need to compress image, CSS or JS files for faster website load.  
We need to compile our SASS / SCSS files, since we love the syntax but browser doesn't understand it.
We need to concatenate our javascript files, since we separate the concerns for easier maintenance.  

## Introducing GulpJS

All this task need extra seconds of our development process. And as you know, we always try to not to repeat ourself.  
Don't worry, GulpJS coming to our rescue.  

## How does GulpJS works?

GulpJS works by reading our `gulpjs file` that we write ourselves.  
GulpJS file is not other than tasks we define, to tell gulpjs do every frontend job that we need.  

## How to install GulpJS

To read more up to date documentation, [go here](https://gulpjs.com/)

### Install Nodejs
If you haven't install nodejs before, you need to [install it first.](https://nodejs.org/en/)  
Check your version by typinf
```
node --version
```

### Install gulp
To install it globally
```
npm install --global gulp-cli
```

### Prepare directory
Create a new directory for our project and navigate into it
```
npx mkdirp new-project
cd new-project
```

### Create package json file
run 
```
npm init
```
it will initialize our project, such as  name, version, description, etc.

### Install GulpJS as dev dependency
GulpJs is a dev tool, we only need it during development phase.
```
npm install --save-dev gulp
```

### Create a gulpfile
Create a new file called gulpfile.js  
This is where we will write our tasks to be read by Gulp  
For testing purpose, write this
```
function defaultTask(cb) {
  console.log('task!')
  cb();
}

exports.default = defaultTask
```
### Test it
```
gulp
```

The default task will run and show our console task!  
That's how to install Gulp, we well explore more on other posts.


