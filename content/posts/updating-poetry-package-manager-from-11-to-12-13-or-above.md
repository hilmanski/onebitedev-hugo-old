---
title: "Updating poetry package manager from 1.1 to 1.2  1.3 or above"
description: "I got a problem when try to update my poetry package manager from 1.1 to 1.2  1.3 or above. Here is how I solve it"
date: 2023-01-17T21:37:00.000Z
topic: [python]
series: [""]
draft: false
---
Normally we can just update our poetry version like this
```
poetry self update
```

**But not if you have poetry < 1.1 version**

If you look at the poetry documentation there's this warning

> Poetry 1.1 series releases are not able to update in-place to 1.2 or newer series releases. To migrate to newer releases, uninstall using your original install method, and then reinstall using the methods above.

## How to uninstall
Uninstall the poetry version first. It depends on how you install it before. I personally forget how I Install it , but I look at my zsh config file where is my poetry located, and I manually delete that folder.

Tips if you can't uninstall it:
- find where your poetry located
- delete the folder manually

## Reinstall current poetry version 
You may want to refer to official poetry doc for this.

But here's what I did:
```
// Install latest stable poetry
curl -sSL https://install.python-poetry.org | python3 -
```

**Add Poetry to your PATH**  
The installer creates a poetry wrapper in a well-known, platform-specific directory:
```
$HOME/.local/bin on Unix.
%APPDATA%\Python\Scripts on Windows.
$POETRY_HOME/bin if $POETRY_HOME is set.
```

**Check poetry is installed**
```
poetry --version
```
