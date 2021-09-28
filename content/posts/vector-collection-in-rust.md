+++
date = 2021-10-05T21:00:00Z
description = "Vector can be used to storing lists of values in Rust. It's one of the collection that included in standard library in Rust"
series = ["start learning Rust"]
title = "Vector: collection in Rust"
topic = ["rust"]

+++
Vector can be used to storing lists of values in Rust. It's one of the collection that included in standard library in Rust.

Example usage: lines of text in a file or prices of items in a shopping cart.

## What's the different between vector and array

Vector is most similar to array in Rust, the different is array has a fixed length, while vector's can grow!

## How to create a Vector

This is how to create an empty vector in Rust

    let v: Vec<i32> = Vec::new();

Vector always has a certain data type that can be written explicitly in Vector<T>.

In real world, we can write directly Vector like this

    let v = vec![1, 2, 3];

\*the type annotation isn’t necessary

## How to read a Vector

To read a vector, we can use index or get method.

    let v = vec![1, 2, 3, 4, 5];
    
    let third: &i32 = &v[2];
    println!("The third element is {}", third);
    
    match v.get(2) {
        Some(third) => println!("The third element is {}", third),
        None => println!("There is no third element."),
    }

1. Use &Vector\[index\]
2. Use Vector.get(index)

When the `get` method is passed an index that is outside the vector, it returns `None` without panicking. But using \[\] will return an error (crash).

## Iterating a Vector

We can iterate through Vector

      let v = vec![100, 32, 57];
      for i in &v {
          println!("{}", i);
      }

Iterate and mutate a vector

    let mut v = vec![100, 32, 57];
    for i in &mut v {
        *i += 50;
    }

## How to update a Vector

We can use push method to add a new vector

    let mut v = Vec::new();
    v.push(5);
    v.push(6);
    v.push(7);
    v.push(8);

## Different type of values in Vector

To implement different type of values in Vector, we need to use enum

    fn main() {
      enum SpreadsheetCell {
          Int(i32),
          Float(f64),
          Text(String),
      }
    
      let row = vec![
          SpreadsheetCell::Int(3),
          SpreadsheetCell::Text(String::from("blue")),
          SpreadsheetCell::Float(10.12),
      ];
    }

Read more at [Vector Documentation](https://doc.rust-lang.org/std/vec/struct.Vec.html)