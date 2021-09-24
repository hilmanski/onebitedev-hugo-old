+++
date = 2021-09-27T16:00:00Z
description = "What is a function in Rust? Learn how to declare and user a function in Rust."
series = ["start learning Rust"]
title = "Function in Rust"
topic = ["rust"]

+++
We can group multiple statement/expression that do a certain thing in a function.

    fn main() {   
    	println!("Hello, world!");
     }

* It's written with `fn` //I like this! much shorter than writing funciton
* Main function is like 'the entry point' for the program. 

The naming convention use snake_case for multiple words.

    fn main() {
        println!("Hello, world!");
        another_function();
    }
    
    fn another_function() {
        println!("Another function.");
    }

## Function parameters

A function can accept an argument. Declared with name: data type

    fn main() {
        another_function(5);
    }
    
    fn another_function(x: i32) {
        println!("The value of x is: {}", x);
    }
    
    //For multiple parameters
    fn another_function2(x: i32, y: i32) {
        println!("The value of x is: {}", x);
        println!("The value of y is: {}", y);
    }

## Function with return value

To return a value from a function, use arrow syntax like this

    fn five() -> i32 {
        5
    }
    
    fn main() {
        let x = five();
        println!("The value of x is: {}", x);
    }

//i32 is the data type of value we promise to return

Note, 5 has no semicolon at the end. It's called an expression.

If we change it to a statement (has semicolon) it will return an error like this

`error[E0308]: mismatched types`