---
title: "How to create a framework-agnostic JavaScript plugin"
description: "How to create a framework-agnostic JavaScript plugin"
date: 2021-07-14T20:38:00.000Z
topic: [javascript]
---
Original demo article source : https://blog.logrocket.com/how-to-create-a-framework-agnostic-javascript-plugin/
Plugins in JavaScript allow us to extend the language to achieve some powerful (or not so powerful) features we desire. Plugins/libraries are essentially packaged code that save us from writing the same thing (features) over and over again.

Just plug it in, and play!

There are hundreds of frameworks in the JavaScript ecosystem, and each one of these frameworks provide us with a system to create plugins in order to add new things to the framework.

If you take a look at the NPM registry, where almost all JavaScript plugins are published, you will see more than a million plugins published as both simple libraries and frameworks.

How you create plugins for each framework may differ significantly. For example, Vue.js has its own plugin system, which is different from how you’d create plugins for React.js. However, it all boils down to the same JavaScript code.

Therefore, being able to create plugins with Vanilla JavaScript gives you the ability to create a plugin that works regardless of the framework in question.

“A framework-agnostic JavaScript plugin is a plugin that works without needing the context of a framework. You can use the plugin in any framework, and even without a framework”

## What to keep in mind when building a library

You should have a goal for your plugin — this is the key thing your plugin is meant to achieve
Your plugin should be easy to use for the intended use
Your plugin should be customizable to a great extent
Your plugin should have a documentation that guides the developers who are going to be using the plugin
Now, let’s get to business putting the above points in mind.

## What we will create

In this article, I will show you how to create a framework-agnostic plugin. For the purpose of this tutorial, we will be creating a carousel/slider plugin — the goal of the plugin.

This plugin will expose a few methods that can be called by the user of the plugin .next() and .prev()

## Done!

Thats all from this content


