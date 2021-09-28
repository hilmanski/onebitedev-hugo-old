+++
date = 2021-10-07T16:00:00Z
description = "Understand What is Lifetime in Rust? what error a lifetime could cause and how to solve this problem"
series = ["start learning Rust"]
title = "What is Lifetime in Rust?"
topic = ["rust"]

+++
Every reference in Rust has a lifetime. It's the scope where that reference is valid.

## Problem example

Let's say we want to compare, which variable has longer string

    fn main() {
        let string1 = String::from("abcd");
        let string2 = "xyz";
    
        let result = longest(string1.as_str(), string2);
        println!("The longest string is {}", result);
    }

This is our longest function

    fn longest(x: &str, y: &str) -> &str {
        if x.len() > y.len() {
            x
        } else {
            y
        }
    }

It will return an error. Rust can't tell whether the variable will be returned x or y. 

**Solution to fix this error**

    fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
        if x.len() > y.len() {
            x
        } else {
            y
        }
    }

We use a generic type 'a , syntax for lifetime annotation. And reference each of the parameter and returned value like above.

## **Problem 2 example**

Let's say we have a config variable that we want to use on another struct

    struct Config {
      ...
    }
    
    struct App {
        config: &Config
    }

It will also return an error. Since Config is now out of scope.

Solution

    struct App<'a> {
        config: &'a Config
    }

## Lifetime Annotation Syntax

The solution is using lifetime Annotation. The syntax looks like this: `'a`

    &i32        // a reference
    &'a i32     // a reference with an explicit lifetime
    &'a mut i32 // a mutable reference with an explicit lifetime

This annotation tell Rust to make the scope of this variable lives in the scope where they're needed.

_!note: a is just a name, it could be named anything_