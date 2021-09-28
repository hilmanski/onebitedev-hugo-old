+++
date = 2021-09-01T16:00:00Z
description = "Learn what is Struct data type in Rust? How to use structure data type in Rust programming language"
series = ["start learning Rust"]
title = "Struct data type in Rust"
topic = ["rust"]

+++
Struct is a custom data type to us group multiple related values together. Sounds like array or tuple, doesn't it? let's see how struck is different.

* It can contains multiple data type values (like tuples).
* We assign a name for each of the value as key.

So we won't rely on the order(index) of the values. Rather, we reference it by it's key.

## How to define a struct

Example struct named user, with multiple values

    struct User {
        username: String,
        email: String,
        sign_in_count: u64,
        active: bool,
    }

We write key : data type, inside bracket of the struct

## How to use struct

After defining it, now we can create an instance of that struct, with filled value on the right side of the key name.

    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

## How to fill specific value in Struct

To fill a specific value, we use the object name (dot) key

    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    
    user1.email = String::from("anotheremail@example.com");

The variable must be mutable, to be able to change it's value.

## Assign struct dynamically

To make our struct dynamic, we can create a function that return that struct with parameters that we need

    struct User {
        username: String,
        email: String,
        sign_in_count: u64,
        active: bool,
    }
    
    fn build_user(email: String, username: String) -> User {
        User {
            email: email,
            username: username,
            active: true,
            sign_in_count: 1,
        }
    }
    
    fn main() {
        let user1 = build_user(
            String::from("someone@example.com"),
            String::from("someusername123"),
        );
    }

if the key and value name is the same, we can write it shortly like this

    User {
            email, //no : email needed
            username, //no : username needed
            active: true,
            sign_in_count: 1,
        }