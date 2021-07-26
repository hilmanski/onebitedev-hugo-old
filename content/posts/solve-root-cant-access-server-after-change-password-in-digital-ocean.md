---
title: "Solve root can't access server after change password in digital ocean"
description: "Learn how to solve when root user can't access server after change new password in digital ocean. You already change new password but still can't access root"
date: 2021-07-25T21:49:00.000Z
topic: [server,devops]
---
Digital ocean is a cloud platform that really nailed their Developer Experience (DX). One of the most frustrating thing as a developer is taking care of server or dev ops stuff. Today I can't access my server at all through SSH. There are many problem that can caused this. Let's see each one of them with solution

## Forget your root/user password

If you just forget you root or user password. 
Log in to your Digital Ocean account
go to your droplet
Choose 'access' in tab
Reset root password

You will get an email with your new password.
After that try to login again to your account.

Watch out! this is very important, you need to enter your free temporary password that sent via email by digital ocean after the first login. So you'll enter your new temporary password twice. Before asked to enter your own choice new password.

## Something is very wrong, disk Full, DDOS attack, or system corrupted

If something went really wrong with your server, in my case was: my disk / CPU usage is full. So there is now way I can change password. Because changing password need a space, unfortunately when you need to change password, your disk is already full. So it's a dead end.. so I though

Fortunately Digital Ocean offer a very nice backdoor

## Recover data from Droplets with Recovery ISO

read more and most update [tutorial regarding recovery ISO in Digital Ocean here](https://docs.digitalocean.com/products/droplets/resources/recovery-iso/)


