+++
date = 2021-10-03T16:00:00Z
description = "Learn what is enums in Rust programming language. How to use enums and when to use it"
series = ["start learning Rust"]
title = "Enums in Rust"
topic = ["rust"]

+++
In general programming language, enums is used to represent a group of constants. But in Rust, enums can be more than constants.

## Enums example

Let's say we're working with an API program. We can define the possible responses in Enum.

    enum APIResponse {
     Error,
     Success,
     Unknown
    }

Error, success and unknown is not coming from a variable, it's just a constant that we initialize up there. 

The type itself is the enum "name". which is APIResponse. We can create, return and play with this enum.

## Enum values

We can create enum instance based on their values like this

    let errorRes = APIResponse::Error;
    let successRes = APIResponse::Success;

Both of values are of the same type: `APIResponse` , we can create a function later that accept them as argument.

    fn respondAPI(respond_kind: APIResponse) {}
    //usage
    respondAPI(APIResponse::Error)

## Enum is very flexible

What if need a string on the API response's example above?

    enum APIResponse {
     Error(String),
     Success,
     Unknown
    }

I just tell the enum, that Error can include a string.

Now we can use it like this

     let errResponse = APIResponse::Error(String::from("HTTP not found"));

This way, our API response can be more flexible. You can also attach a String to Success or Unknown just like "Error" above.

It can include a string, int, struct and anything!

Here is example of complex but valid enum

    enum Message {
        Quit,
        Move { x: i32, y: i32 },
        Write(String),
        ChangeColor(i32, i32, i32),
    }

Be careful, not to put any random data in the same enum, make sure they are relatable.

## Method in enum

Just like in a struct, we can also create a method in enum

    fn main() {
        enum Message {
            Quit,
            Write(String),
        }
    
        impl Message {
            fn call(&self) {
                // method body would be defined here
            }
        }
    
        let m = Message::Write(String::from("hello"));
        m.call();
    }