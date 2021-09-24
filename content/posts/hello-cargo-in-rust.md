---
title: What is Cargo in Rust
description: Cargo is Rust's build system and package manager. It's an optional tool,
  but it handles a lot of tasks to work with Rust
date: 2021-09-25T08:33:00+00:00
topic:
- rust
series:
- start learning Rust

---
Cargo is Rust's build system and package manager. It's an optional tool, but it handles a lot of tasks to work with Rust.

Tasks include:
```
build your project with cargo build
run your project with cargo run
test your project with cargo test
build documentation for your project with cargo doc
publish a library to crates.io with cargo publish
```

We may not need this for now (at least for learning syntax or hello world program). But soon when we need a package or our program stars growing. It will comes in handy!

## Hello World with Cargo
We've build hello world before. Now let's build it with helps from Cargo.
```
cargo new hello_cargo
```
It create a new project and  binary (application) `hello_cargo`.
You can chanel hello_cargo with your own project name.
```
cd hello_cargo
```
Take a look inside this dir.
It creates:
```
A src folder for our source code with hello world example
A .gitignore file.
and a configuration file called 'cargo.toml'
```

## Build a Rust program with Cargo
Now we can build and run our hello world program with Cargo
```
cargo build
```
Just like before, it will create an executable file for us to run.
Now try
```
./target/debug/hello_cargo
```
For Windows
```
.\target\debug\hello_cargo.exe
```

## Cargon run for short
To do both of the job in one command, try
```
cargo run
```
It compiles the code and then run the resulting executable.
It's our hello world program

## Check your program
If you don't need to compile (the executable file) just yet. You can always run
```
cargo check
```
just to check our code.

## Building for release
If you are ready to fly on production, we can use
```
cargo build --release
```