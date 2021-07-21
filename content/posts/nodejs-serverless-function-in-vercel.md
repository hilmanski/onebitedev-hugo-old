---
title: "Nodejs serverless function in vercel"
description: "Learn how to deploy and write nodejs serverless function in vercel platform for free"
date: 2021-07-21T00:20:00.000Z
topic: [serverless, nodejs, vercel]
---
We can deploy a serverless function with [vercel](https://vercel.com/) for free. In a nutshell, with serverless function, we can write backend languages that read HTTP request and return a response. Vercel supports a lot of backend language, one of them is Nodejs (javascript)

## Prepare nodejs file

To write our API serverless function in vercel, create a new file called whatever.js (name is up to you) inside a folder called '/api', 

As default, vercel provides Nodejs version 14.x if not defined. 
File could also be writtern in typescript with .ts extension

## Nodejs serverless function syntax

Each platform has it own serverless function syntax. Vercel has a very familiar and easy to read syntax. Take a look at this example 

```
module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
```
You can guess by it's name, this function take 2 parameters, one is req, short for request and the other is res, short for response. Inside it, we can write any backend logic that we need for our function. In this case, we just return a json response from request body, query and cookies.

If you save this code inside api/hello.js
then we can call it in `localhost/api/hello.js`

## Read req or query paramater

To read a query parameter in URL in vercel's serverless function, we can use req.query.

```
module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
```
Accesing api/hello/?name=onebite
will return 'Hello onebite !'

## Write serverless function using typescript

To deploy a node.js file written in typescript, we save the file with .ts extension. 
Here is the same code with previous example, written in typescript

```
import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = 'World' } = request.query;
  response.status(200).send(`Hello ${name}!`);
};
```

This '@vercel/node' module, can be install with
```
npm i -D @vercel/node
```
To configure the Vercel TypeScript compiler., we can also define it in a tsconfig.json file.

##  Available object in nodejs serverless function

Request and response have some pre defined property/object we can access.
Here is the list from [vercel's nodejs runtime docs](https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-request-and-response-objects)

req.query = An object containing the request's query string, or {} if the request does not have a query string.

req.cookies = An object containing the cookies sent by the request, or {} if the request contains no cookies.

req.body = An object containing the body sent by the request, or null if no body is sent.

res.status(code) = A function to set the status code sent with the response where code must be a valid HTTP status code. Returns res for chaining.

res.send(body) = A function to set the content of the response where body can be a string, an object or a Buffer.

res.json(obj) = A function to send a JSON response where obj is the JSON object to send.

res.redirect(url) = A function to redirect to the URL derived from the specified path with status code "307 Temporary Redirect".

res.redirect(statusCode, url) =  A function to redirect to the URL derived from the specified path, with specified HTTP status code.

## Information about request body

The req.body property is a parsed version of the content sent, so no need to parse it again.
Example how to read body request with error fallback if the json malformed

```
try {
  req.body;
} catch (error) {
  return res.status(400).json({ error: 'My custom 400 error' });
}
```


