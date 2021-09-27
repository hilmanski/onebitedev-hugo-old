+++
date = 2021-09-30T16:00:00Z
description = "Understand what is ownership in Rust. Ownership enables Rust to make memory safety guarantees without needing a garbage collector."
series = ["start learning Rust"]
title = "What is ownership in Rust"
topic = ["rust"]

+++
_Warning: this part is not basic syntax lesson for Rust, it's a overview of how memory allocating works in Rust_

What is Ownership in Rust? _Ownership_ enables Rust to make memory safety guarantees without needing a garbage collector.

* Some programming language looks for unused memory using garbage collector
* Some language, required the programmer to allocate and free the memory
* Rust has a third approach.

The memory in Rust will be managed by _system of ownership_. It has rules that the compiler checks at compile time. It won't slow down the program when it's running. It might be a new concept for some programmer (it is for me!).

Ownership is a central feature in Rust. If we understand this, we'll have a solid understanding what makes Rust unique.

It's also useful when we're working with more complex data types, since it will be stored on a heap rather than on Stack.

## Rules of ownership in Rust

There are 3 rules to keep in mind:  
\- each value has a variable that's called its owner.  
\- only one owner allowed  
\- When owner goes out of scope, value will be dropped

## Ownership and functions

Use a variable as an argument of a function is works like assign it to a new variable.

Take a look at this example.

    fn main() {
        let s = String::from("hello");  // s comes into scope
    
        takes_ownership(s);             // s's value moves into the function...
                                        // ... and so is no longer valid here
    
        let x = 5;                      // x comes into scope
    
        makes_copy(x);                  // x would move into the function,
                                        // but i32 is Copy, so it's okay to still
                                        // use x afterward
    
    } // Here, x goes out of scope, then s. But because s's value was moved, nothing
      // special happens.
    
    fn takes_ownership(some_string: String) { // some_string comes into scope
        println!("{}", some_string);
    } // Here, some_string goes out of scope and `drop` is called. The backing
      // memory is freed.
    
    fn makes_copy(some_integer: i32) { // some_integer comes into scope
        println!("{}", some_integer);
    } // Here, some_integer goes out of scope. Nothing special happens.
    

The variable directly passed to other function, will make that variable no longer valid (depend on the data type). The ownership of that variable is 'transferred'.