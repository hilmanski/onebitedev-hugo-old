---
title: "Passing children on React component results in error objects are not valid as a React child"
description: "How to solve error objects are not valid as a React child when passing a children into nested React Component"
date: 2022-11-24T17:41:00.000Z
topic: [react]
series: [""]
draft: false
---
How to solve error "objects are not valid as a React child" when passing a children into nested React Component.

The error  "objects are not valid as a React child" has many various cases. In this article, we're talking specifically when passing a children between React Component

Say we have a child component like this.
```
export default function ChildComponent(children) {
    return (
        <div>
            {children}
        </div>
    )
}
```

It'll show the above error, because we're passing the children the wrong way. It assumes children is a key value pair passed from a parent component.

What we want is :
wrap the children in brackets.
```
export default function ChildComponent({children}) {
    return (
        <div>
            {children}
        </div>
    )
}
```

Or with typescript
```
export default function Croppable({children}: {children: JSX.Element}) { ... |
```
