+++
date = 2021-10-03T05:00:00Z
description = "How to add a method on a struct in Rust. If we do have a special repeatable task for a struct, it's better to put it, in it's own function"
series = ["start learning Rust"]
title = "Struct Method in Rust"
topic = ["rust"]

+++
How to add a method on a struct in Rust. If we do have a special repeatable task for a struct, it's better to put it, in it's own function.

You can say, method is same as function, but it's defined in the struct context (or enum/ or object). 

Here is a rectangle Struct, with area method, to count it's area

    #[derive(Debug)]
    struct Rectangle {
        width: u32,
        height: u32,
    }
    
    impl Rectangle {
        fn area(&self) -> u32 {
            self.width * self.height
        }
    }

* Use impl to implement the methods
* use &self as parameter of the method.
* You can have multiple methods inside the impl block

## How to call the method

Just like a function, but with the instance name of the struct

    fn main() {
        let rect1 = Rectangle {
            width: 30,
            height: 50,
        };
    
        println!(
            "The area of the rectangle is {} square pixels.",
            rect1.area()
        );
    }

Method is useful to organize our code, as method only related to that particular struct.

## Associated functions

Associated functions are normally used for constructors that return a new instance of the struct.

    #[derive(Debug)]
    struct Rectangle {
        width: u32,
        height: u32,
    }
    
    impl Rectangle {
        fn square(size: u32) -> Rectangle {
            Rectangle {
                width: size,
                height: size,
            }
        }
    }

How to call 'square' the function?

    fn main() {
        let sq = Rectangle::square(3);
    }

On calling an associated function, we use the Struct with double colon (::) and the function's name