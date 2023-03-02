---
title: "Render different component in react conditionally"
description: "How to render different components based on value or conditionally in ReactJS without using switch case since that's not available"
date: 2023-03-02T22:15:00.000Z
topic: [react]
series: [""]
draft: false
---
Since switch case is not available for us, we need to do a if else statement

To loop over an array in React and conditionally render different components based on the value of each element's type property, you can use the map method and a conditional statement, like this:

```
import React from 'react';

const App = () => {
  const elements = [
    { type: 'text', content: 'Hello world' },
    { type: 'image', url: 'https://example.com/image.jpg' },
    { type: 'video', url: 'https://example.com/video.mp4' },
  ];

  return (
    <div>
      {elements.map((element, index) => {
        if (element.type === 'text') {
          return <TextComponent key={index} content={element.content} />;
        } else if (element.type === 'image') {
          return <ImageComponent key={index} url={element.url} />;
        } else if (element.type === 'video') {
          return <VideoComponent key={index} url={element.url} />;
        } else {
          return null; // handle unsupported element types
        }
      })}
    </div>
  );
};

const TextComponent = ({ content }) => <p>{content}</p>;
const ImageComponent = ({ url }) => <img src={url} alt="" />;
const VideoComponent = ({ url }) => (
  <video controls>
    <source src={url} type="video/mp4" />
  </video>
);

export default App;
```


In this example, we have an array of elements with different type values, and we use the map method to loop over them and render the appropriate component for each one based on its type value. 

We also pass any additional props required by each component, such as content for the TextComponent and url for the ImageComponent and VideoComponent. 

Note that we're using a key prop with a unique value for each component to help React efficiently update the UI when the array changes.


