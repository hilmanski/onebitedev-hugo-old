+++
date = 2021-09-29T16:00:00Z
description = "Learn how to loop a program in Rust, using for, loop, and while. It's part of the control flow process"
series = ["start learning Rust"]
title = "Looping in Rust"
topic = ["rust"]

+++
To execute a code block more than once, we can use loops. There are 3 ways to do this in Rust:

* loop
* while
* for

## Repetition with Loop

We can use loop like this.

_Warning! this program will keep running , unless you stop it manually_

    fn main() {
        loop {
            println!("yeayyy!");
        }
    }

It's a common mistake on programming, when we write loop without condition.

ALWAYS tell your loop when to stop. We can use `break` keyword to stop the program. 

    fn main() {
        let mut counter = 0;
    
        let result = loop {
        	//value must be changed, to meet certain codition
            counter += 1;
    		
            //We use if condition to stop the loop after 10
            if counter == 10 {
                break counter * 2;
            }
        };
    
        println!("The result is {}", result);
    }

## Repetition with While

We can also explicitly write the condition after `while` keyword.

    fn main() {
        let mut number = 3;
    
        while number != 0 {
            println!("{}!", number);
    		//change value on each loop
            number -= 1;
        }
    
        println!("LIFTOFF!!!");
    }

## Repetition with For

`For` loop is perfect if we want to iterate an array, to prevent out of index error

    fn main() {
        let a = [10, 20, 30, 40, 50];
    
        for element in a.iter() {
            println!("the value is: {}", element);
        }
    }

This way when we change the array, we don't need to update how many times it should repeat.

## Reverse with for

We can reverse order of number with .rev()

    fn main() {
        for number in (1..4).rev() {
            println!("{}!", number);
        }
        println!("gooo!");
    }

result

    3!
    2!
    1!
    gooo!