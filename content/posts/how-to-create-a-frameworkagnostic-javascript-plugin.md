---
title: "How to create a framework-agnostic JavaScript plugin"
description: "How to create a framework-agnostic JavaScript plugin"
date: 2021-07-14T20:38:00.000Z
topic: [javascript]
---
Original demo article source : https://blog.logrocket.com/how-to-create-a-framework-agnostic-javascript-plugin/
Plugins in JavaScript allow us to extend the language to achieve some powerful (or not so powerful) features we desire. Plugins/libraries are essentially packaged code that save us from writing the same thing (features) over and over again.

```
var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);
```

Just plug it in, and play!

There are hundreds of frameworks in the JavaScript ecosystem, and each one of these frameworks provide us with a system to create plugins in order to add new things to the framework.

## What to keep in mind when building a library

You should have a goal for your plugin — this is the key thing your plugin is meant to achieve
Your plugin should be easy to use for the intended use
Your plugin should be customizable to a great extent
Your plugin should have a documentation that guides the developers who are going to be using the plugin
Now, let’s get to business putting the above points in mind.

```
var _self = (typeof window !== 'undefined')

function othercode here(){
	.//runn
}
```


## What we will create

In this article, I will show you how to create a framework-agnostic plugin. For the purpose of this tutorial, we will be creating a carousel/slider plugin — the goal of the plugin.

This plugin will expose a few methods that can be called by the user of the plugin .next() and .prev()

## Done!

Thats all from this content


