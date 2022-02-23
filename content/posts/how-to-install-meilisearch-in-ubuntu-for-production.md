---
title: "How to install meilisearch in ubuntu for production?"
description: ""
date: 2022-02-22T22:24:00.000Z
topic: [search]
series: [""]
draft: false
---
The new Algolia, Elasticsearch and Typesense alternative is in town! Introducing [Meilisearch](https://www.meilisearch.com/)

"Meilisearch is a powerful, fast, open-source, easy to use and deploy search engine. Both searching and indexing are highly customizable. Features such as typo-tolerance, filters, and synonyms are provided out-of-the-box."

In this article, I want to share "How to set up meilisearch in ubuntu for production"

## Install Meilisearch on Ubuntu

Install CURL first
```
# Install curl which is required to install Meilisearch in the next step
apt install curl -y
```

Install Meilisearch via CURL
```
curl -L https://install.meilisearch.com | sh
```

## Make it accessible

To make meilisearch accessible (callable) from anywhere, run
```
mv ./meilisearch /usr/bin/
```
it moves binary to your system binaries

Now you can run
```
meilisearch
```

## Run in background
When we close terminal / exit program, meilisearch will also stop working. But we want it to keep running in the background, so our app user, can do the smart search they want. For that to happen, we'll run meilisearch as system or run it in background.

Go to sysmtd directory
```
cd /etc/systemd/system/
```

Create new service file called 'meilisearch.service'
```
touch meilisearch.service
```

Edit the file 
```
nano meilisearch.service #use sudo if needed
```

Add this
```
[Unit]
Description=Meilisearch
After=systemd-user-sessions.service

[Service]
Type=simple
ExecStart=/usr/bin/meilisearch --http-addr 127.0.0.1:7700 --env production --master-key Y0urVery-S3cureAp1K3y

[Install]
WantedBy=default.target
```

!remember to change your password/API key with your own custom key.


## Run and check

```
# Set the service meilisearch
systemctl enable meilisearch

# Start the meilisearch service
systemctl start meilisearch

# Verify that the service is actually running
systemctl status meilisearch
```

Your meilisearch search engine is now run at 'http://127.0.0.1:7700'

That's enough if you run your app and meilisearch on a single server.


