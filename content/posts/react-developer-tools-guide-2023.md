---
title: "react developer tools guide 2023"
description: "This is a simple guide on how to use react developer tools in browser like chrome, firefox or safari to help us, debug and inspect: components, props and state"
date: 2023-01-15T19:25:00.000Z
topic: [react, tool]
series: [""]
draft: false
---
This is a simple guide on how to use react developer tools in browser like chrome, firefox or safari to help us, debug and inspect everything from components, props and state to identify potential or current problem on our React application.

## How to install React developer tools
React developer tool is available as browser extension.  Here's the link to install based on your browser

[React dev tool for chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
[React dev tool for Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)
[React dev tool for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

Note: I'll be using chrome for this simple guide 

Now, visit your site that uses react under the hood. When opening chrom devtools, now you'll two new tabs: "Components" and "Profile" with react logo on it 

![screenshot reactdevtool in chrome](https://i.ibb.co/10W7Hrg/Screen-Shot-2023-01-16-at-15-30-34.png)

*If not available yet, make sure to enable it in your "extensions options" in choosen browser.*

## For other browser
Skip this if you've succesfully intall the dev tool.
For browser that don't have this extension yet, you can install it as a package with npm or yarn
```
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

Then to open the dev tools, run in terminal
```
react-devtools
```

Then add this script tag to connect your site with the dev tools (in head)
```
<html>
  <head>
    <script src="http://localhost:8097"></script>
```


Source: [react docs](https://beta.reactjs.org/learn/react-developer-tools)

## Why do you need React Dev Tools

*Who is it for? why it's important?*
As you know, react is client javascript library that play with Virtual DOM. All state and props may not be captured when you do normal inspection on browser.  

You'll what you can explore and do with this tool

## What to see
In "components" tab you can see all the react components that is currently rendered on this page in a nice tree view. You can also find a specific component in "search form" there.

![screenshot react dev tools components](https://i.ibb.co/QYK6q13/Screen-Shot-2023-01-16-at-15-37-56.png)

In the left side: treeview of our component, without the real DOM 
In the right side: each detail like props, what file and parent components rendering it.

Just by having this, we already can inspect our component easier rather than finding it out on normal inspection.

## Play with each component

Now focusing on the right side, let's see what we can do with these buttons on right corner:
![image](https://i.ibb.co/J51VKq1/Screen-Shot-2023-01-16-at-15-40-52.png)

We see on the right corner, there's some little cute icons like "exclamation mark", "timer" , "eye", "bug" and "code logo". Let's see what each one do

**exclamation mark**  
The exclamation mark, is a way to force the selected component to go into "error state". This way we can know what happen with our site, when this particular component is in error.

**eye symbol**  
is used to find the "matching" DOM element. It'll bring us to the related DOM element in inspect tab

**Ladybug symbol**  
To show the logs of this component in console.log 

**Code bracket**  
And last but not least the "code < > bracket, will show use the related code component directly in dev tool. 

Just like inspection tool from browser,  
we can also change the properties like classname related to the component, but not just that, we're also able to update the state for this component


That's it for now, we may explore other part of react developer tool on next article.

## Other resources
- If you're interested in the "react profiler dev tool", check [this blog post by AddyOsmani](https://addyosmani.com/blog/profiling-react-js/)
- Nice interactive tutorial [react-devtools-tutorial](https://react-devtools-tutorial.vercel.app/element-selector-tool)



