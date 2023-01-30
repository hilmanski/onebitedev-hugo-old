---
title: "Convert string to UUID format in Javascript"
description: "This is how to convert a 32 characters string into UUID format with - dash as separator on each 8 - 4 - 4 - 4 - 12 characters."
date: 2022-03-22T22:40:00.000Z
topic: [javascript]
series: [""]
draft: false
---
This is how to convert a 32 characters string into UUID format with - dash as separator on each 8 - 4 - 4 - 4 - 12 characters.

```
function insertString(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function converToUUID(str){
 _uuid = insertString(_uuid, 8, '-')
 _uuid = insertString(_uuid, 13, '-')
 _uuid = insertString(_uuid, 18, '-')
 _uuid = insertString(_uuid, 23, '-')
 
 return _uuid
}
```

The idea is we insert a string on each of "X" characters. I use a simple insertString function that I found on stackoverflow answers.

The number 8, 13, 18, 23 is when the position of dash "-" after we insert each one of them.

## Online tool
- [UUID Generator online](https://toolboxfordev.com/uuid-generator)
- [UUID Converter online](https://toolboxfordev.com/uuid-converter)

