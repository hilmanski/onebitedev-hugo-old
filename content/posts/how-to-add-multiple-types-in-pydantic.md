---
title: "How to add multiple types in pydantic"
description: "To allow pydantic to accept multiple values we can use Union"
date: 2022-04-28T22:26:00.000Z
topic: [python]
series: [""]
draft: false
---
To allow pydantic to accept multiple values we can use Union and put the values inside the square brackets

For example:
```
favicon_link: Union[str, bool]
```

This way we allow favicon_link to be any str or bool


