+++
date = 2021-10-02T05:00:00Z
description = "Learn about Slice data type in Rust. It's a reference for sequence of elements in a collection"
series = ["start learning Rust"]
title = "Slice data type in Rust"
topic = ["rust"]

+++
Slice is a data type in Rust that doesn't have ownership system.

## String Slice

_A string slice_ is a reference to part of a String.

    //example of String slice
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];

We can take a specific part of String by it's index. We use slice by using bracket \[starting_index..ending_index\]

If we want to start from 0, we can ignore the starting_index

    let slice = &s[..2];

Or if we want to reach the end of the string, we can use the len method (length)

    let len = s.len();
    
    let slice = &s[3..len];
    let slice = &s[3..];

Warning: String slice range indices must occur at valid UTF-8 character

## Example program

Study case: We want to write a function that take a sentence and return only first word.

    fn first_word(s: &String) -> &str {
        let bytes = s.as_bytes();
    
        for (i, &item) in bytes.iter().enumerate() {
            if item == b' ' {
                return &s[0..i];
            }
        }
    
        &s[..] //return whole string
    }
    
    fn main() {}

## String literals = Slices

If we declare a string like this

    let s = "Hello, world!";

The type of s is `&str`

## Other slice

We can also implement number of array as slice, like this

    fn main() {
    let a = [1, 2, 3, 4, 5];
    
    let slice = &a[1..3];