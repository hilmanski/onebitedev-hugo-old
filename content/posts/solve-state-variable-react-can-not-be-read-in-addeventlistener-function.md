---
title: "Solve state variable react can not be read in addEventListener function"
description: "Today I learned, that we can't access the variable inside addEventListener function we manually write for an element in React, Javascript"
date: 2022-09-13T20:45:00.000Z
topic: [javascript]
series: [""]
draft: false
---
I'm used to adding .addEventListener function on a particular element in Javascript. This behavior follows me when I'm writing React App.

Today I learned, that we can't access the variable inside addEventListener function we manually write for an element in React, Javascript.

So I need to move the onClick , directly as attribute of element I want inside the React component.

```
// sample
<Page key={pageNumber} 
      onClick={event => handleClick(event)}>
      Test
</Page>
```

Read this discussion on stackoverflow 
[React.js State not updating in Event Listener in useEffect Hook](https://stackoverflow.com/questions/67244161/react-js-state-not-updating-in-event-listener-in-useeffect-hook)
