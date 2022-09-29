---
title: "How to have a hover effect on children when parent is hovered in Tailwind"
description: "Learn how to have a hover effect on children when parent is hovered in Tailwind CSS. Luckily, this case is already covered, no hacky-way needed"
date: 2022-09-28T23:55:00.000Z
topic: [tailwind]
series: [""]
draft: false
---
Let's learn how to have a hover effect on children element when parent is hovered in Tailwind CSS. 

1. We identify the parent by adding `group` as a class name
2. Using `group-hover:$any_style_here` on any children element we want.

Here's the example from official Tailwind docs.

```
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
```


- In the `a tag`, we have `group` as one of the class name
- In `svg tag` we have ` group-hover:stroke-white`
- In `h3 tag` we have `group-hover:text-white `
- While in `p tag` we have `group-hover:text-white`

All three elements will be changed based on it's value on group-hover, when we hover on the a (parent) tag element.

See the [result here](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state)
