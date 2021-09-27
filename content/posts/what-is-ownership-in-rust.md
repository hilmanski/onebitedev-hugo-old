+++
date = 2021-09-30T16:00:00Z
description = "Understand what is ownership in Rust. Ownership enables Rust to make memory safety guarantees without needing a garbage collector."
draft = true
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

## Variable Scope in Rust

Each variable declared in Rust has their scope. Scope is where that variable is valid.

Normally, A variable's scope is only valid on a function where they're declared

    fn main() {
        let s = "hallo"
      }
      //S scope only inside main function

Or if you declare a scope with curly brackets

    fn main() {
        let x = "yo"
        {
    	    let s = "hallo"
         }
         //S only valid inside above curly brackets
         .... //continue
      }

In Rust, the memory is automatically returned once the variable that owns it goes out of scope.

Rust will call a function called `drop` automatically at a closing curly bracket (you don't need to deal with that). This drop function will free the memory for us.

## Complex case

Assume we declared a variable based on other variable 

    fn main() {
        let x = 5;
        let y = x;
    }

Since 5 is a primitive value and the size is already known, it's very straightforward: Now y and x has value of 5. Y will just copy x value. The whole thing will be stored in a stack.

**But let's take a look at string version**

    fn main() {
        let s1 = String::from("hello");
        let s2 = s1;
    }

But with more complex variable, especially when the size is unknown, Rust will use both Heap and Stack.

**What happen when we declare s1**  
Stack will store the pointer, length and capacity of the string, while Heap will store the value each of character 'h' 'e' 'l' 'l' 'o' with their index.

![](https://i.ibb.co/dDqGtw3/Screen-Shot-2021-09-28-at-6-33-26-AM.png)

**What happen when we assign s2 = s1  
**The data of the Stack will be copied. But it will point to the same Heap. Since it's expensive to copy the heap, imagine if it has a very large value.

So now.. there are 2 Heaps used but only one Stack.

![](https://i.ibb.co/6PDNQkB/Screen-Shot-2021-09-28-at-6-39-14-AM.png)

\*images from doc rust-lang.org

**What's the problem?  
**If one of the two variables s1 or s2, goes out of scope, the what happen? since both of them pointing to the same value.