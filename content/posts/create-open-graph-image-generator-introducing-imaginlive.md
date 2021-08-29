---
title: "Create Open Graph Image generator, introducing imagin.live"
description: "We need an image for each of our blog post to make it stand out on social media. But generating for each one for our post is not fun. That's why you'll love Imagin. It's a post about how I make Imagin, dynamic open graph image generator"
date: 2021-08-28T23:19:00.000Z
topic: [nodejs, vue, hackathon]
series: [""]
draft: false
---
We need an image for each of our blog post to make it stand out on social media. But generating for each one for our post is not fun. That's why you'll love [Imagin](https://imagin.live/about)! I write regularly on my blog, I know it's not fun to have to prepare Social/OpenGraph Image for each one of the post. We just want to write! 

This is a dynamic image generator, where the image will change according to your title. You just have to put our API link once. *Imagin* that!

I create this project as part of Auth0 and Hashnode hackathon #Auth0  #Auth0Hackathon. It's an Idea I have a long time ago, but definitely need a push. Thanks for Hashnode to create this hackathon event, which force me to do it.












## Separating concerns

To make this project maintainable, I need to make 4 separate repository, each have it's own job. Here is the link repository with explanation of it's job

- [Client App](https://github.com/hilmanski/imagin-web) : this is where user will create their account and template
- [Main API](https://github.com/hilmanski/imagin-API) : The Client App will using this API to interact with our database for stuff like updating template and website's information
- [Template](https://github.com/hilmanski/imagin-template) :  Static file. I keep it clean to easily modify our template (image)
- [Screenshot API](https://github.com/hilmanski/imagin-screenshot) : When user get the "API Code", they will access our screenshot API to generate an image

## Authentication

Thanks to [auth0](https://auth0.com/), I don't have to spare a lot of time on creating register, login and other authentication functionality on this app. They will take care everything for us. Since I use vuejs for my client side app, I pick [this repo by Istyles](https://github.com/lstyles/vue3-auth0-sample/) as a starter for connecting auth0 and vuejs 3 App.

Auth0 also has an "action flows". Where we can trigger a custom code to our API, if anything happen on out authentication process.
![ss flow auth0](https://i.ibb.co/2cTy2xP/Screen-Shot-2021-08-30-at-7-10-35-AM.png)

In this sample, I save a fresh registered user on my database too.
You can do more with auth0's actiom

## Hosting and Database

Luckily, to make a prototype, a lot of company has a generous offer for us to host our data or our site. For this project, I host my site at [vercel](https://vercel.com/) and database at [Deta](deta.sh).

Currently I store the image using [imagekit](https://imagekit.io/). Imagekit also has a benefit as a CDN, to load our image faster

## Overview on how it works

![ss template imagin](https://i.ibb.co/rdCJcJb/Screen-Shot-2021-08-30-at-6-58-08-AM.png)

### Register
User needs to create an account first. This is  important, since we don't want to just anyone use our API or abuse the service without limit. Using auth0 action's our user will be also saved in our Detabase. For later usage.

### Creating tempalte
User can create a template from the client App which made from VueJS.  They can choose which font, position, logo, color or background for their image's template. Currently it only offered default font on the web such as 'serif, san-serif, monospace and cursive', but adding one is pretty straighforward.

### Get the API
After saving their template. User get their API-link. This API link can be user in their website to generate image automatically. The API will be pointed to nodejs code, where we run a pupptr (background headless browser) to visit our template and customize how it look based on the API and take the screenshot. 

We upload this image to ImageKit and return the URL. 

It will take a few seconds, for generating the first image, but since we also save the image on our database, the next times, it will be much much faster.

### How to use
User put this code on their meta image (twitter or on open graph) and change the title, whether manually or dynamically. 
If you are a developer, you can look at the API, it's very flexible, you can generate more unique image by playing with the paramter


