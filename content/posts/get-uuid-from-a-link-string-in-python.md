---
title: "Get uuid from a link string in python"
description: "Learn how to get UUID from a string link on a python programming language. This could be useful for example when you are working with Notion site then need to grab the id"
date: 2022-05-30T23:53:00.000Z
topic: [python]
series: [""]
draft: false
---
Learn how to get UUID from a string link on a python programming language. This could be useful for example when you are working with Notion site then need to grab the id  or any other need.

First we need to import uuid
with uuid.UUID(string) will convert "anythathasdash" to "any-that-has-dash" 
```
return str(uuid.UUID(string_id))
```

But let's assume our string is not clean. It has several possibilites, like having string before or having question mark that normally shows up on a link, ect.
Here's how I solve it
```
import uuid

def __get_UUID_from_link(link):
    string_id = link.split("?")[0]
    string_id = string_id.split("-")[-1]
    string_id = string_id.split("/")[-1]
    return str(uuid.UUID(string_id))

# Several test cases
link1 ='https://random.notion.site/c4b84f78ac5d4ded9ab380f1dfcbca8a'
link2 = 'https://vine-temper-random.notion.site/My-Site-samplepage-910f9d07c0314f62adc21ecd6f212efa'
link3 = 'https://vine-temper-random.notion.site/My-Site-samplepage-910f9d07c0314f62adc21ecd6f212efa?foo=bar'
link4 = 'https://random.notion.site/414f36dfd0684062806169e59e737cc4?v=911155c9e3ed47c19d307e36435f4840'

print(__get_UUID_from_link(link1))
print(__get_UUID_from_link(link2))
print(__get_UUID_from_link(link3))
print(__get_UUID_from_link(link4))
```

Hope it helps you to solve how to convert a link string to a uuid format in Python

## Online tool
- [UUID Generator online](https://toolboxfordev.com/uuid-generator)
- [UUID Converter online](https://toolboxfordev.com/uuid-converter)




