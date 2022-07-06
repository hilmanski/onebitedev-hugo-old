---
title: "How to Install Laravel on Mac OS"
description: "Learn How to Install Laravel on Mac OS, by using brew and installing PHP, composer and mysql (if you need mysql)"
date: 2022-07-06T02:21:00.000Z
topic: [laravel, mac]
series: [""]
draft: false
---
Laravel has a lot of fans around the world. Maybe you just want to tryout [Laravel](https://laravel.com/) as well. Welcome to the club!

If you're using Mac, I hope this guide can help you install it.

## Install brew
Hombrew, is a package manager for Mac OS. It can help us, as a developer to install various things. Including PHP , composer and other necessary package later.
So let's install this first
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
or check the [homebrew's homepage](https://brew.sh/)

## Install PHP 
To install newest PHP and directly using it on Mac OS, use
```
brew install php
```
You can verify it, with typing "php --version" 

## Install Composer
Laravel itself, will be installed with composer. So let's install this as well
```
brew install composer
```

See how easy it's to install different packages on our Mac OS with help from brew package manager.

## Need database? install mysql
Normally, or as default, Laravel using MySQL, if you don't have it already installed. Let's do in. 
I'm sure you know the command at this point.
```
brew install mysql
```

## That's all you need to install Laravel on Mac OS

Feel free to run
```
php artisan serve
```

Now your laravel is running!


