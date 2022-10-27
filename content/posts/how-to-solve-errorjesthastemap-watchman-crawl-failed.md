---
title: "How to solve Errorjest-haste-map Watchman crawl failed."
description: "Here is the solution on how to solve Error: jest-haste-map: Watchman crawl failed. Retrying once with node crawler when running Jest Test"
date: 2022-10-26T20:02:00.000Z
topic: [testing , jest]
series: [""]
draft: false
---
When using Jest for the first time, you might encounter this error
```
Error: jest-haste-map: Watchman crawl failed. Retrying once with node crawler.
```

which happen on Mac OS.

We need to install watchman for this. Example using brew
```
brew uninstall watchman
```
Or if you need to reinstall it
```
brew reinstall watchman
```

AND you need to give it access  (permission to your folder).  
By go to > System Preferences > Security & Privacy > Privacy > Files and Folders 

And allow watchmen (tick the checkbox) for Files and Folder
![screenshot](https://i.ibb.co/2sFHPnf/Screen-Shot-2022-10-27-at-16-01-20.png)

Refrence of this issue: [https://github.com/facebook/draft-js/issues/2183](https://github.com/facebook/draft-js/issues/2183)
