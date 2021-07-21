---
title: "Handling API request based on method in Vercel Nodejs"
description: "Learn how to handle API request based on method, example GET, POST, PUT or DELETE request in Vercel Nodejs serverless function"
date: 2021-07-21T06:39:00.000Z
topic: [serverless, nodejs, vercel]
---
Vercel's serverless function, provides `req.method` property to read the incoming method request. We can use this to write a beautiful API url endpoint

For example
```
GET: /books
GET: /books/{id}
POST: /books
PUT: /books/{id}
DELETE: /books
```



## Code example

Inside our api/books.js

```
module.exports = (req, res) => {
	if(req.method === 'GET') {

	}

	if(req.method === 'POST') {

	}

	if(req.method === 'PUT') {

	}

	if(req.method === 'DELETE') {

	}
}
```

You can also use switch case for this.


