+++
date = 2021-09-29T16:00:00Z
description = "Understand the variable scope in Rust. This is an important part so we can learn how Rust allocating their memory later"
series = ["start learning Rust"]
title = "Variable Scope in Rust"
topic = ["rust"]

+++
Understand the variable scope in Rust is important, so we can learn how Rust allocating their memory later

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

With more complex variable like this, especially when the size is unknown, Rust will use both Heap and Stack.

## Double free problem

Based on previous example

    fn main() {
        let s1 = String::from("hello");
        let s2 = s1;
    }

**What happen when we declare s1:**

Stack will store the pointer, length and capacity of the string, while Heap will store the value each of character 'h' 'e' 'l' 'l' 'o' with their index.

![](https://i.ibb.co/dDqGtw3/Screen-Shot-2021-09-28-at-6-33-26-AM.png)

**What happen when we assign s2 = s1:  
**The data of the Stack will be copied. But it will point to the same Heap. Since it's expensive to copy the heap, imagine if it has a very large value.

So now.. there are 2 Heaps used but only one Stack.

![](https://i.ibb.co/6PDNQkB/Screen-Shot-2021-09-28-at-6-39-14-AM.png)

\*images from doc rust-lang.org

**What's the problem?  
**If one of the two variables s1 or s2, goes out of scope, the what happen? since both of them pointing to the same value.

Or other problem is "double free". When both of variables goes out of scope, then they try to free same memory in heap. Such an error can potentially lead to security vulnerabilities.

**How Rust deal with this**

This is a very important point, _when a value is copied, the original variable will be cleared by Rust_. So..

    fn main() {
        let s1 = String::from("hello");
        let s2 = s1;
    
        println!("{}, world!", s1);
    }

Will return an error. Since s1 is not valid anymore! 

So it's safe to say, when we assign a variable to other variable: We are moving the first var to the second var.

## How to copy the whole thing?

If you want to copy the whole variable, both in stack and heap. We can use `clone`

    fn main() {
        let s1 = String::from("hello");
        let s2 = s1.clone();
    
        println!("s1 = {}, s2 = {}", s1, s2);
    }

But take a note, this process is expensive.

If you use an integer or other simple data type, you don't need to do a clone, since Rust will automatically call `copy` function to do that. Here is the list of data types that don't need clone

* The Boolean type, `bool`, with values `true` and `false`.
* All the integer types, such as `u32`.
* All the floating point types, such as `f64`.
* The character type, `char`.
* Tuples, if they only contain types that also implement `Copy`. For example, `(i32, i32)` implements `Copy`, but `(i32, String)` does no