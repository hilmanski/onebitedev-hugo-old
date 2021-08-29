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

## Hosting and Database

Luckily, to make a prototype, a lot of company has a generous offer for us to host our data or our site. For this project, I host my site at [vercel](https://vercel.com/) and database at [Deta](deta.sh).

Currently I store the image using (imagekit)[https://imagekit.io/]

## Overview on how it works

- User needs to create an account first. This is  important, since we don't want to just anyone use our API or abuse the service without limit. 
- User create a template from the client App. They can choose which font, position, logo, color or background for their image's template
- User get their API-link after creating their template
- User put this code on their meta image (twitter or on open graph) and change the title, whether manually or dynamically
- The API will take a screenshot from our template based on user customization using Puppeter.
- Upload the image on Image CDN Service like Imagekit
- We save this Image's URL at database. So for next time, it will load much faster


