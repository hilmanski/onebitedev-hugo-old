+++
date = 2021-10-03T21:00:00Z
description = "Rust didn't have a null value. But there is an Enum Option that can implement null behavior"
series = ["start learning Rust"]
title = "The Option Enum in Rust, null alternative"
topic = ["rust"]

+++
Rust didn't have a null value. But there is `Enum Option` that can implement null behavior.

Enum Option could represents a value: it could be something, or it could be nothing.

This is how it looks like

    enum Option<T> {
        None,
        Some(T),
    }

T itself is a generic type parameter.

Here is concrete example of Enum Option:

    fn main() {
        let some_number = Some(5);
        let some_string = Some("a string");
    
        let absent_number: Option<i32> = None;
    }

Notice, if we want to assign None, we have to declare specific type of Option<type>