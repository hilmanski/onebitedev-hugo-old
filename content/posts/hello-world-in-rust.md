---
title: "Hello World in Rust"
description: "Write our Hello World in Rust. It requires compiling and running"
date: 2021-09-24T20:33:00.000Z
topic: [rust]
series: ["start learning Rust"]
draft: false
---

Create a new file in your project called `main.rs`
and write the following
```
fn main() {
    println!("Hello, world!");
}
```

In terminal window (mac/linux) run
```
rustc main.rs
./main
```

For windows
```
> rustc main.rs
> .\main.exe
```

There we go! hello World!

As you notice. Rust requires compiling, before we can run the program. 
`rustrc` is the keyword for compiling.

After running `rustrc`, if you see your project dir, you can see there is `main` file besides our source code from before `main.rs`.  It's the executable file.
