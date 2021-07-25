---
title: "Moodle site: The session partition is full error [unsolved]"
description: "How to solve The session partition is full error on moodle site or when your disk is full"
date: 2021-07-24T01:07:00.000Z
topic: [moodle]
---
I'm not a moodle developer, but I have a friend that I helped to set up his moodle site years ago. Today the site shows an error "The session partition is full. It is not possible to log in at this time. Please notify the server administrator."

Before you go to technical solution below, one thing you should aware of. Don't update big files (image/video/etc..) directly on your moodle. Depend on your CPU size, you could easily run out of memory because of this. You can use 3rd party storage, like youtube for videos (any services as log as outside your moodle) and embed their link to you moodle site.



## Solution I tried

I restarted mysql on my ubuntu service with 
```
sudo service mysql restart
```

It works.. for a while, but suddenly same error shows up again. (sometimes this errors shows up 'Error reading from database' on moodle site)

## Clean up Moodle

So I tried another solution.
1. Deleting moodle backup files (since I currently don't need it)
change directory (depend on yours location) to moodle backup location
```
cd /var/moodledata/temp/backup 
```
delete all files and directory
```
rm -r *
```

2. Delete session files
change directory (depend on yours location) to moodle data session
```
cd /var/moodledata/sessions 
```
delete all files
```
rm *
```

Currently error still shows up, need to find other solution

## On finding the problem

I look at the droplet stats, it shows CPU usage almost full, it's weird, since I just resize the droplet yesterday.. or maybe something wrong because of the resize? not sure.. and I don't want to spend so many times working on something I have no interest yet (moodle dev), so I'm looking around at forum and try some tips and trick.

One of them is from here [moodle forum](https://moodle.org/mod/forum/discuss.php?d=363452)


