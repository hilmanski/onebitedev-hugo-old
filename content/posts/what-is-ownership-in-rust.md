+++
date = 2021-09-30T16:00:00Z
description = "Understand what is ownership in Rust. Ownership enables Rust to make memory safety guarantees without needing a garbage collector."
draft = true
series = ["start learning Rust"]
title = "What is ownership in Rust"
topic = ["rust"]

+++
Let's learn what is ownership in Rust.  
_Ownership_ enables Rust to make memory safety guarantees without needing a garbage collector.

* Some programming language looks for unused memory using garbage collector
* Some language, required the programmer to allocate and free the memory
* Rust has a third approach.

The memory in Rust will be managed by _system of ownership_. It has rules that the compiler checks at compile time. It won't slow down the program when it's running. It might be a new concept for some programmer (it is for me!).

Ownership is a central feature in Rust. If we understand this, we'll have a solid understanding what makes Rust unique.