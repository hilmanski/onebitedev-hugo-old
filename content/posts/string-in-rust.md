+++
date = 2021-09-27T16:00:00Z
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