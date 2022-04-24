---
title: "How to allow local certificates in Postman?"
description: "When you have self assigned certificate in your computer and want to allow Postman to access it, you need to add the certificate from your trusted store"
date: 2022-04-24T21:53:00.000Z
topic: [SSL, postman]
series: [""]
draft: false
---
When you have self assigned certificate in your computer and want to allow Postman to access it, you need to add the certificate from your trusted store. The location is depend on your OS.

- Go to Postman
- Go to settings 
- Select certificates tab
- Toggle CA certificate ON (if not)
- Locate your rootCA.pem file

For example in Mac, rootCA is located in $users/library/application supports/mkcert (if you are using mkcert)

Hope it helps!


