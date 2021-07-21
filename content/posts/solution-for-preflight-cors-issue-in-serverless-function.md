---
title: "Solution for preflight CORS issue in serverless function"
description: "This is how you can solve preflight CORS issue in vercel serverless function when building API in nodejs"
date: 2021-07-20T20:49:00.000Z
topic: [serverless, nodejs, vercel]
---
CORS (Cross-Origin Resource Sharing) issue is one of developer's enemy when building API that need to be accessed from different domain. CORS itself is a good thing that prevent any user/client to access our API. 



## What is Preflight CORS?

Preflight CORS, is a way for browser to check on the server is the current request allowed or not. As the name suggest, 'pre' means before we process the original request, it sends a request before as a verification.

So when you send non-GET or non-POST request, you need to handle this preflight request first, before handling the real API request. 

read more about [preflight request here](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)

## What is actually being sent?

If you try to send a DELETE, PUT, etc.. request , the preflight will send it's 'first army' to check the 'battle field'. But this army is not the request itself, but an OPTION request. That's why in our API we need to handle OPTION request.

## How to handle preflight CORS in vercel

In serverless function nodejs for vercel, you can handle it like this 

```
module.exports = (req, res) => {
    //set header first to allow request or origin domain (value can be different)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code

 //Preflight CORS handler
    if(req.method === 'OPTIONS') {
        return res.status(200).json(({
            body: "OK"
        }))
    }

}
```
It just return 'okay', to let the browser know, that this request is valid, so you can continue with the real request.

## How to handle preflight CORS in netlify

For netlify, method request is on event.httpMethod property.
So, in netlify, you can handle it like this 

```
exports.handler = function(event, context, callback) {

//---- other code

 //Allow CORS in header
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

   if (event.httpMethod === 'OPTIONS') {
      // To enable CORS
      return {
       statusCode: 200, 
       headers,
       body: 'success'
     };
 }
}
```
It just return 'okay', to let the browser know, that this request is valid, so you can continue with the real request.


