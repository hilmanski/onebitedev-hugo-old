+++
date = 2021-09-28T09:00:00Z
description = "String in Rust might be more complex than you think. When people talk about string, it can have multiple meaning"
series = ["start learning Rust"]
title = "String in Rust"
topic = ["rust"]

+++
String in Rust might be more complex than you think. When people talk about string, it can have multiple meaning.

## String literal

The simplest version of string is String literal

      let s = "hello"; 

If we hardcoded a string, then this is a literal String. It's immutable by default, just like other data type.

## String type `String`

It might be a bit confusing for now, but there is other string type we called `String`. Yeah.. same name.

The different with String literal, String type will be stored in Heap rather than stack since it's mutable.

This is how to declare `String` type

    let s = String::from("hello");

Using String::from()

Now `s` variable can be changed (mutated)

## Convert literal string to String type

Using to_string we can do the following

    let data = "initial contents";
    let s = data.to_string();
    // the method also works on a literal directly:
    let s = "initial contents".to_string();
    //same as
    let s = String::from("initial contents");

Just remember that strings are UTF-8 encoded.

## Updating a String

We can update a string, with push_str method

    let mut s = String::from("foo");
    s.push_str("bar");

Or to take a single character as a parameter

      let mut s = String::from("lo");
      s.push('l');

## Concatenating String in Rust

We can also use a plus sign to concatenate a string in Rust

    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; 

If we used `s1` plain like above, remember it can't be used anymore. Instead use & if we still want to use the variable.

For more complex formatting we can use format macro.

    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");
    
    let s = format!("{}-{}-{}", s1, s2, s3);