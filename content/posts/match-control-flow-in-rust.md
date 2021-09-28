+++
date = 2021-10-04T17:00:00Z
description = "There is one more powerful control flow in Rust, which is match. It's pretty straightforward, we would return a value based on match condition"
series = ["start learning Rust "]
title = "Match control flow in Rust"
topic = ["rust"]

+++
There is one more powerful control flow in Rust, which is match. It's pretty straightforward, we would return a value based on match condition.

## Basic usage of match

    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter,
    }
    
    fn value_in_cents(coin: Coin) -> u8 {
        match coin {
            Coin::Penny => 1,
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter => 25,
        }
    }
    
    fn main() {}

Left side is the condition => right side is the returned value.

If we need run multiple expression on the right side, we can use curly brackets

    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter,
    }
    
    fn value_in_cents(coin: Coin) -> u8 {
        match coin {
            Coin::Penny => {
                println!("Lucky penny!");
                1
            }
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter => 25,
        }
    }
    
    fn main() {}

## Match with value parameter

If our enum have a return value, match condition can return that parameter, like this

    #[derive(Debug)]
    enum UsState {
        Alabama,
        Alaska,
        // --snip--
    }
    
    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter(UsState),
    }
    
    fn value_in_cents(coin: Coin) -> u8 {
        match coin {
            Coin::Penny => 1,
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter(state) => {
                println!("State quarter from {:?}!", state);
                25
            }
        }
    }
    
    fn main() {
        value_in_cents(Coin::Quarter(UsState::Alaska));
    }

//It will print Alaska!

## Match with Option<T>

We can handle Option<T> enum using match as well.

In this example, we create a function that if a value passed, it will increment it's value

    fn main() {
        fn plus_one(x: Option<i32>) -> Option<i32> {
            match x {
                None => None,
                Some(i) => Some(i + 1),
            }
        }
    
        let five = Some(5);
        let six = plus_one(five);
        let none = plus_one(None);
    }

`i` will represent the number we are passing.

If we didn't handle the None case inside our match expression, Rust will throw an error when we try to compile it.

## Default value in match

We don't always have to write every case that might happen in match. Instead we can use underscore _ as a default value, if nothing is matched

    fn main() {
        let some_u8_value = 0u8;
        match some_u8_value {
            1 => println!("one"),
            3 => println!("three"),
            5 => println!("five"),
            7 => println!("seven"),
            _ => (),
        }
    }
    