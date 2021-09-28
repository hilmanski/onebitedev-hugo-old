+++
date = 2021-10-06T05:00:00Z
description = "Learn what is Hash Map in Rust. Tutorial on how to use Hash Map, the key value pair collection in Rust"
series = ["start learning Rust"]
title = "Hash Map in Rust"
topic = ["rust"]

+++
Hash map is one of common collections in Rust, with key value as a pair. `HashMap<K, V>`

It's useful when we want to store and retrieve data by a certain name/key not by the index

## Create a Hashmap

We can use insert method. Insert take 2 params. First the string as a key, and second is the value.

    use std::collections::HashMap;
    
    let mut scores = HashMap::new();
    
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

Warning: Hash maps are homogeneous: all of the keys must have the same type, and all of the values must have the same type.

## Retrieve value from Hashmap

We can retrieve the values using get method

      use std::collections::HashMap;
    
      let mut scores = HashMap::new();
    
      scores.insert(String::from("Blue"), 10);
      scores.insert(String::from("Yellow"), 50);
    
      let team_name = String::from("Blue");
      let score = scores.get(&team_name);

## How to iterate key value pair of Hashmap

We can iterate all the key value pair with

    for (key, value) in &scores {
          println!("{}: {}", key, value);
      }

## Update value of key

Each value in hashmap can only have one key. If we re-assign a value with the same key name, it will overwrite the previous one.

If we want to be safe, we can use `or_insert` to only insert data if the key don't have any value yet

     scores.entry(String::from("Blue")).or_insert(50);

## Storing two vectors in a Hashmap

Assume we have two different vector we get from some type of database. We want to store them as key -value pair in hashmap. Here is how:

      use std::collections::HashMap;
    
    let teams = vec![String::from("Blue"), String::from("Yellow")];
    let initial_scores = vec![10, 50];
    
    let mut scores: HashMap<_, _> =
        teams.into_iter().zip(initial_scores.into_iter()).collect();

`collect()`return hash map from iterated tuples  
`zip()` create an iterator of tuples.