+++
date = 2021-09-26T16:00:00Z
description = "What are available data types in Rust ? It also has two subsets: a scalar data type and a compound data type, including array and tuples"
series = ["start learning Rust"]
title = "Data types in Rust"
topic = ["rust"]

+++
Learn what data types are available in Rust.   
It also has two subsets: a scalar data type and a compound data type.

Rust is a statically typed language. It must know the data type of each variable at compile time. 

## Scalar types

A scalar type used for single value.   
Rust has four scalar types (primary): 

* integers 
* floating-point numbers
* Booleans 
* and characters.

Find more detail [here](https://doc.rust-lang.org/book/ch03-02-data-types.html)

## Compound types

A compound types can represents group of multiple values.  
Rust has 2 primitive compound types:

## Tuples

A group of values with different types can be compounded into a tuple.

* tuples have a fixed length (they can't be change)

    let tup: (i32, f64, u8) = (500, 6.4, 1); //explicit
    let tup = (500, 6.4, 1); //simple

How to get value from a tuple (destructing way)

    let (x, y, z) = tup;

How to get value from a tuple (by index/index) by (name(dot)order)

    let x: (i32, f64, u8) = (500, 6.4, 1); 
    let five_hundred = x.0; 
    let six_point_four = x.1; 
    let one = x.2;

## Array

A group of values with same type.

* length is fixed
* It's useful when you want data allocated on the stack rather than the heap (on other chapter)

  ### How to declare an array

    let a = [1, 2, 3, 4, 5];
    //or
    let months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

\*If you want a flexible number of items (length can grow or shrink, use vector)

###  Declare array with same value

    let a = [3; 5];

same as

    let a = [3, 3, 3, 3, 3];

### How to access array element

Using the index in square bracket

    let a = [1, 2, 3, 4, 5]; 
    let first = a[0]; 
    let second = a[1];