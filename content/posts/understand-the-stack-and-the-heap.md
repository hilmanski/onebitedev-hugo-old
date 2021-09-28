+++
date = 2021-10-01T10:00:00Z
description = "What is stack and what is heap in term of memory allocating in programming language?"
series = []
title = "Understand the stack and the heap"
topic = ["rust", "computer"]

+++
What is stack and what is heap in term of memory allocating in programming language?

While learning Rust, I met with ownership subject. This topic discuss about memory allocation on Rust. So I decide to learn more about how memory management in general works for programming language.

## About Stack and Heap

This is how programming language store it's data on memory (not database) , stuff like variable need a place to be stored while running the program. Stack and Heap is two different ways / place to store this data.

Every programming language have different way how to handle this memory allocation.

## What is Stack

Stack is a way to store data based on order. Imagine when we order a plate, we'll put the newest one on top. 

And how we get the plate? By taking from the top. As known as "Last in First Out".

![](https://i.ibb.co/9cLjzGg/stack.png)

In general,  the data that is stored in stack already has a fixed length. It will also be handled automatically by the programming language. Storing and retrieving data is faster, since it's already has order.

## What is Heap?

Heap is a way to store data, which the length is unknown. A variable that is mutable will be put in Heap. Since the length can grow or shrink.

In some programming language, the programmer need to deal with this memory management, they need to reserve and freeing the memory if it's not needed anymore to avoid memory leaking on the program.

![](https://i.ibb.co/w64Q6pP/heao.png)

Since Heap is more flexible, storing and retrieving data is more costly than stack. 