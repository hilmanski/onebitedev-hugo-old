+++
date = 2021-09-05T09:00:00Z
description = "When there are many possible values, but we only care about one in a control flow, we can use if and let syntax in rust."
series = ["start learning Rust"]
title = "If and let in Rust Control flow"
topic = ["rust"]

+++
Based on previous lesson, we know we can handle a default function in Rust like this

    fn main() {
        let some_u8_value = Some(0u8);
        match some_u8_value {
            Some(3) => println!("three"),
            _ => (),
        }
    }

But.. When there are many possible values and we only care about one value in a control flow, we can use if and let syntax in rust. It's shorter and more clear

    fn main() {
        let some_u8_value = Some(0u8);
        if let Some(3) = some_u8_value {
            println!("three");
        }
    }

It's a syntax sugar for our match.

## Else in if-let

If let, also have an `else`

It's useful when we want to specify the action for the rest of possible values.

    #[derive(Debug)]
    enum UsState {
        Alabama,
        Alaska,
        // --snip--
    }
    
    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter(UsState),
    }
    
    fn main() {
        let coin = Coin::Penny;
        let mut count = 0;
        if let Coin::Quarter(state) = coin {
            println!("State quarter from {:?}!", state);
        } else {
            count += 1;
        }
    }