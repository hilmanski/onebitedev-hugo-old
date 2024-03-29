---
title: "How to optimize laravel app with caching route and config"
description: "How to optimize laravel app with caching route and config. All it's done by simple one-line command"
date: 2019-06-15T04:00:00.000Z
topic: [laravel]
series: [""]
---
You've done created a pretty big laravel app and now it's ready to be used by hundreds if not thousands of people. Of course we don't want every time a user access our app, it re-read the config or the route part, since it's not changing that much.

```
php artisan cache:clear  
php artisan config:clear  
php artisan route:clear  
```

## Refresh Cache
What if you change any configuration and route, suddenly you don't see any new changes in your laravel app. Don't worry, we just need to clear and recache everything

```
//clear it first  
php artisan cache:clear  
php artisan config:clear  
php artisan route:clear

//recache everything  
php artisan config:cache  
php artisan route:cache  
php artisan optimize  
```


