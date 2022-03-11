---
title: "Solving the Next.js Head problem that auto parse HTML entity"
description: "I want to share how I finally solved the Next.js Head problem that auto parse HTML entity. In my case, I want to remove &amp; (ampersand sign) being encoded by Next.js Head."
date: 2022-03-10T21:52:00.000Z
topic: [nextjs, react]
series: [""]
draft: false
---
I want to share how I finally solved the Next.js Head problem that auto parse HTML entity. In my case, I want to remove &amp; (ampersand sign) being encoded by Next.js Head. 



## My case
I want to hit ogimpact (social image API) which using amp; (ampersand) sign on the query URL.

## How I solved it
With helped from [Nextjs issue discussion on GIthub](https://github.com/vercel/next.js/discussions/12480), which answered by @lukeshumard.

1. Preparing the API to redirect the request
create /pages/api/foldername/[...url].js
```
//here is an explicit example how I redirect to ogimpact image URL
export default function handler(req, res) {
    const { url } = req.query;
    const ogish_format = `https://ogi.sh/article?title=${url.toString().replace(/\s/g, '%20')}&imageUrl=https://source.unsplash.com/qj15uNotnH0`
    const redirectUrl = decodeURIComponent(ogish_format);
    res.redirect(redirectUrl);
}
```

2. Call this API on <head> tag
```
<meta property="og:image" content={`https://Yoursite.com/api/foldername/${encodeURIComponent(post.title)}`} />
```


