+++
date = 2021-10-07T16:00:00Z
description = "Learn what is Traits in Rust. Tutorial on how to implement Traits in Rust programming language. It's similar to interfaces in other languages"
series = ["start learning Rust"]
title = "Traits in Rust"
topic = ["rust"]

+++
Traits are similar with interface on other language.   
A traits is a way to abstract or share similar behavior on Rust.

## Example use case

Let's say we want to make a news aggregator that summarize a news from different resources.

We create a trait as our (you alone or with teammate) on what function must be implemented later.

## Define a trait

We can define a trait like this

    pub trait Summary {
        fn summarize(&self) -> String;
    }

We have a trait Summary that have a function called summarize. 

Now we make a 'contract' to implement a summarize method that will return a string

## Implementing a Trait

Assume we have two different Struct (news resources)

The syntax is impl TraitName for Struct

    pub trait Summary {
        fn summarize(&self) -> String;
    }
    
    pub struct NewsArticle {
        pub headline: String,
        pub location: String,
        pub author: String,
        pub content: String,
    }
    
    impl Summary for NewsArticle {
        fn summarize(&self) -> String {
            format!("{}, by {} ({})", self.headline, self.author, self.location)
        }
    }
    
    pub struct Tweet {
        pub username: String,
        pub content: String,
        pub reply: bool,
        pub retweet: bool,
    }
    
    impl Summary for Tweet {
        fn summarize(&self) -> String {
            format!("{}: {}", self.username, self.content)
        }
    }
    
    //Implementation
    let tweet = Tweet {
            username: String::from("horse_ebooks"),
            content: String::from(
                "of course, as you probably already know, people",
            ),
            reply: false,
            retweet: false,
        };
    
        println!("1 new tweet: {}", tweet.summarize());

As you can see, bot implement our Summary Trait with summarize function. But each of the summarize has a different implementation. 

## Default implementation

We can prepare a default implementation for a trait like so

    pub trait Summary {
        fn summarize(&self) -> String {
            String::from("(Read more...)")
        }
    }

## Use own trait method

Assume we have a function that use other function on our trait

    pub trait Summary {
        fn summarize_author(&self) -> String;
    
        fn summarize(&self) -> String {
            format!("(Read more from {}...)", self.summarize_author())
        }
    }

Now, the implementation can only call one of it's method

    impl Summary for Tweet {
        fn summarize_author(&self) -> String {
            format!("@{}", self.username)
        }
    }

If you try

    let tweet = Tweet {
            username: String::from("horse_ebooks"),
            content: String::from(
                "of course, as you probably already know, people",
            ),
            reply: false,
            retweet: false,
        };
    
        println!("1 new tweet: {}", tweet.summarize());

It will return "1 new tweet: (Read more from @horse_ebooks...)"