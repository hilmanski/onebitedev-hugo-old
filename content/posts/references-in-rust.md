+++
date = 2021-10-01T16:00:00Z
description = "This is part of the ownership lesson in Rust. References is a cheap way to use other variable on other function without passing the whole value"
series = ["start learning Rust"]
title = "References in Rust"
topic = ["rust"]

+++
This is part of the ownership lesson in Rust.   
References is a cheap way to use other variable on other function without passing the whole value.

    fn main() {
        let s1 = String::from("hello");
    
        let len = calculate_length(&s1);
    
        println!("The length of '{}' is {}.", s1, len);
    }
    
    fn calculate_length(s: &String) -> usize {
        s.len()
    }

This program will run. len and s1 will be printed on main function. 

_BUT! we've learned that, a copied or a function that passed to a function will be gone_

The answer is the "ampersands sign" &.   
This ampersand called _references_

## What references do?

Reference will point/refer to a value without taking their ownership. So the variable will still be valid after that.

To use reference, just use & + variable name

and to accept it in a function as argument, use ampersand sign on the data type

    (s: &String)

Since the function didn't own it, so no value will be dropped.

You can also imagine 2nd function is "borrowing" the value of the 1st function.

## You can't modify references

If you try to run this function

    fn main() {
        let s = String::from("hello");
    
        change(&s);
    }
    
    fn change(some_string: &String) {
        some_string.push_str(", world");
    }

It will return an error. We can't modify any reference, since we just borrowing it.

## Mutable Reference

But can we change it though? Yes we can. Using mutable references.

    fn main() {
        let mut s = String::from("hello");
    
        change(&mut s);
    }
    
    fn change(some_string: &mut String) {
        some_string.push_str(", world");
    }

Make sure the variable itself is mutable.   
Then create a mutable reference with `&mut variableName`

There is a restriction. We can only have one!   
This is not valid:

    fn main() {
        let mut s = String::from("hello");
    
        let r1 = &mut s;
        let r2 = &mut s;
    
        println!("{}, {}", r1, r2);
    }

Rust did this, to prevent "a data race" at compile time. It's a problem when they try and change the same data at the same time.

If you really need to reference and change the variable, we can just create a new scope for one of the variable

    fn main() {
        let mut s = String::from("hello");
    
        {
            let r1 = &mut s;
        } // r1 goes out of scope here, so we can make a new reference with no problems.
    
        let r2 = &mut s;
    }