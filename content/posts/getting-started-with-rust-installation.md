---
title: "Getting started with Rust, installation"
description: "Let's set up our Rust development environment. We will use Rustup / Cargo as our installer and package manager."
date: 2021-09-24T20:33:00.000Z
topic: [rust]
series: ["start learning Rust"]
draft: false
---
Let's set up our Rust development environment,

## Playground
You can play Rust online, without installing anything. [Play Rust Lang](https://play.rust-lang.org/)

## Installing Rustup
The recommended way to install Rust is using [Rustup](https://rustup.rs/). It's both installer and version manager for Rust

For macOs / Linux
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
Using other OS? check [other installation method here](https://forge.rust-lang.org/infra/other-installation-methods.html)

## Update current version
Rust updates frequently. Run `rustup update` to user the latest update.

## What is Cargo
When we install Rustup, we also install Cargo. It does a lot of things
- build your project with `cargo build`
- run your project with `cargo run`
- test your project with `cargo test`
- build documentation for your project with `cargo doc`
- publish a library to crates.io with `cargo publish`

To make sure everything is installed. Run `cargo --version`

## Make it nice on your text editor
Whatever text-editor you use, make sure to install Rust support (syntax highlight or snippets) to make your experience better

## Fun Fact
When you install Rust, it also copy the documentation locally to read offline. 
Try `rustup doc` to open it in browser (locally).

## Want to uninstall?
You can run
```
 rustup self uninstall
```
