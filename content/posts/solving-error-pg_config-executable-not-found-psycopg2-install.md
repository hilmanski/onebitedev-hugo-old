---
title: "Solving  Error: pg_config executable not found psycopg2 install"
description: "On my mac machine, I tried to install a new python library with psycopg2 in it, I got pg_config error, here's how I solve this error"
date: 2022-05-24T02:06:00.000Z
topic: []
series: [""]
draft: false
---
On my mac machine, I tried to install a new python library with psycopg2 in it, I got pg_config error, here's how I solve this error

Case:
When I try to add a new package on my computer that has psycopg2 library, it shows me this error

```
 Error: pg_config executable not found.

        pg_config is required to build psycopg2 from source.  Please add the directory
        containing pg_config to the $PATH or specify the full executable path with the
        option:

            python setup.py build_ext --pg-config /path/to/pg_config build ...

        or with the pg_config option in 'setup.cfg'.

        If you prefer to avoid building psycopg2 from source, please install the PyPI
        'psycopg2-binary' package instead.

        For further information please check the 'doc/src/install.rst' file (also at
        <https://www.psycopg.org/docs/install.html>).

        [end of output]

    note: This error originates from a subprocess, and is likely not a problem with pip.
  error: metadata-generation-failed

  × Encountered error while generating package metadata.
  ╰─> See above for output.
..
```

## How I solve it
On mac, I need to install postgre first,
we can install it with homebrew
```
brew install postgresql
```

Then try to install any package,  now the error will be gone


