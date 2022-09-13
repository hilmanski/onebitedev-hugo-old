---
title: "How to use Toast UI Editor in Browser (without NPM)"
description: "Are you looking for great markdown WYSIWYG text editor? Try toast UI Editor, lets see how to use it directly in browser"
date: 2022-09-13T02:39:00.000Z
topic: [toastUI, javascript]
series: [""]
draft: false
---
Are you looking for great markdown WYSIWYG text editor? Try toast UI Editor, lets see how to use it directly in browser on your HTML file.

## Install via CDN
First, we load the Javascript as well as the CSS via UI CDN. By putting the two tags inside head tag.
```
<head>
..
    <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
 <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
</head>
```

## Add Div for the editor
```
 <div id="editor"></div>
 ```
 
## Add script to initialize Toast UI Editor
Put this script after before the close body tag.
```
const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '500px',
  initialEditType: 'markdown',
  previewStyle: 'vertical'
});

editor.getMarkdown();
```

*Change the #editor with whatever element's name you used.
