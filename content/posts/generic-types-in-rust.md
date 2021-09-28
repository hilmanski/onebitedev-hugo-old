+++
date = 2021-10-06T16:00:00Z
description = "Learn what is Generic Types in Rust. Tutorial on how to implement Generic Types in Rust programming language"
series = ["start learning Rust"]
title = "Generic Types in Rust"
topic = ["rust"]

+++
Just like it's name , generic types mean we can have a generic data type on `something` that we need. It could be in enum, function or other concept we've known so far.

Rust is strict type language, but on a certain case, we want to abstract our code to avoid duplication, maybe through a function. We can use this generic type to help on this case.

## Syntax

In general , you'll see <T> as representation of generic data type. T itself just a variable name, it could be anything.

## Example generic type in Struct

    struct Point<T> {
        x: T,
        y: T,
    }
    
    fn main() {
        let integer = Point { x: 5, y: 10 };
        let float = Point { x: 1.0, y: 4.0 };
    }

We make a Point struct with T generic type. In this case, x and y must have same data type, since they're both `T` 

If you want to have a different data type, we can use different variable as such

    struct Point<T, U> {
        x: T,
        y: U,
    }

## Example generic type in Enum

For a single type

    enum Option<T> {
        Some(T),
        None,
    }

For multiple type

    enum Result<T, E> {
        Ok(T),
        Err(E),
    }

## Example generic type in a method

    struct Point<T> {
        x: T,
        y: T,
    }
    
    impl<T> Point<T> {
        fn x(&self) -> &T {
            &self.x
        }
    }
    
    fn main() {
        let p = Point { x: 5, y: 10 };
    
        println!("p.x = {}", p.x());
    }