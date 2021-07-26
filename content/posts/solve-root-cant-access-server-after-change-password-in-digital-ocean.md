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
First time I open the official docs is super scary. But it has to be need, client need his website. The reality, is much simpler than what I think.

Steps:
1. Boot intro the recovery ISO
2. Prepare the droplet for recovery
3. Recover data (optional)
4. Back to "normal state" (Boot from Hard Drive)

Let's do it step by step


## Turn off your droplet

There is on/off button you can toggle in your droplet when you logged In. 
Turn it off

## Recovery ISO

Go to "recovery tab"
and choose Boot from Recovery ISO , in my case it automatically toggle the "on button" again. 
So my droplet is now booted from Recovery ISO.

If not, you can toggle the on button again manually

![recovery from ISO screenshot](https://i.ibb.co/3T0Fgfd/Screen-Shot-2021-07-27-at-7-01-14-AM.png)

## Access console

Now launch console from your Digital Ocean's droplet menu, it's located below you toggle on/off button.
You'll see the menu from recover ISO like this
```
This droplet is booted to the DigitalOcean recovery environment.
When you are finished, you may set your Droplet to boot from
the local disk again via the DigitalOcean control panel.

This rescue environment is based on Ubuntu 18.04.

* Network access and SSH have been enabled automatically *
* SSH Host keys do NOT match while using this rescue system *

Root Password has randomly been set to:
  exam-ple0-1234-5678
Your are strongly encouraged to use SSH keys. To import your SSH
public keys:
  From Github:        ssh-import-id gh:<Github user name>
  From Launchpad.net: ssh-import-id lp:<launchpad user name>
--------------------------------------------------------------------
1. Mount your Disk Image [Not Mounted]
2. Check Filesystem
3. Reset Droplet Root Password
4. Configure Keyboard
5. Attempt to 'chroot' into installed system
6. Interactive Shell [/bin/bash]
Choose (1-6) and press Enter to continue.
```

You can choose depend on what you need,
In our case, press "3" to reset our password.

## Do something with your data

If your disk is full, maybe you want to delete some files first to get free spaces. Or maybe you want to other thing with your application. Go to "6" from previous menu, to go to your shell.

After having some space, you may update your root password again

## Try from your terminal

If anything went smooth, now try to access your server again with your new root password. 
Hope it all working now!

## Back to "normal mode"

Now same process as before, but to recover in normal mode.
- Turn off your droplet
- In "recovery tab", choose "boot from hard drive"
- Turn on your droplet

Good luck!


