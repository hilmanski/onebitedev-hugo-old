+++
date = 2021-09-28T16:00:00Z
description = "Learn how to implement a Conditional statement in Rust. Using if and else. We can also use just one line if else to declare variable"
series = ["start learning Rust"]
title = "Conditional statement in Rust"
topic = ["rust"]

+++
It's similar with conditional statement from other programming language.   
We can use if and else keyword. No need to wrap the condition inside rounded bracket "(" and ")".

    fn main() {
        let number = 3;
    
        if number < 5 {
            println!("condition was true");
        } else {
            println!("condition was false");
        }
    }

## Multiple condition with else if

    fn main() {
        let number = 6;
    
        if number % 4 == 0 {
            println!("number is divisible by 4");
        } else if number % 3 == 0 {
            println!("number is divisible by 3");
        } else if number % 2 == 0 {
            println!("number is divisible by 2");
        } else {
            println!("number is not divisible by 4, 3, or 2");
        }
    }
    

## Non-boolean

Since, Rust is type sensitive, we'll get an error if provide non-boolean as argument

    fn main() {
        let number = 3;
    
        if number {
            println!("number was three");
        }
    }

result

    error[E0308]: mismatched types

## Variable declaration based on condition

We can do ternary operator in Rust like this:

    fn main() {
        let condition = true;
        let number = if condition { 5 } else { 6 };
    
        println!("The value of number is: {}", number);
    }

The value in left side and right side (5 and 6 in the above case) must have same data type. 