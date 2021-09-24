+++
date = 2021-09-25T16:00:00Z
description = "Learn how to declare a variable in Rust. Also see what is mutable and immutable variable"
series = ["Start Learning Rust"]
title = "Declare a variable in Rust and mutability"
topic = ["rust"]

+++
This is a common programming concepts. That might be not unique to rust. Let's see how to declare a variable in Rust.

## Immutable variable

By default, a variable in Rust is immutable. Meaning this variable is a constant or will not change. 

It's intentionally made immutable by default for safety and easy concurrency.

    let x = 5;

or

    let y = "hallo!";

If you try to change one of the variable, it will return 

    cannot assign twice to immutable variable `x`

## Mutable variable

To make a mutable variable, use `mut` keyword

    let mut x = 5;

Now you can assign a new variable

    let mut x = 5;
    x = 10;

## Const variable

What about const?   
It also available in Rust, using `const` keyword for a constant value.

    const MAX_POINTS: u32 = 100_000;

It might be similar to immutable let. What's the difference then?

* const can be declared in the global scope.
* It represents a constant expression, not a result of something
* The naming convention is UPPER_CASE