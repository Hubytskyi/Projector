'use strict';

// Async - 1

// console.log('one');
// console.log('two');
// console.log('three');

// function delay() {
//     let sum = 0;
//     for(let i = 0; i < 1000000000; i++) {
//         sum++
//     }
// }

// delay()

// console.log('four');


// Call stack
// function outer() {
//     function inner() {
//         console.log('log')
//     }

//     inner()
// }

// outer();

// const stack = [];
// stack.push(outer)       // стак зараз [outer]
// stack.push(inner)       // стек зараз [outer, inner]
// stack.push(console.log) // стек зараз [outer, inner, console.log]
// stack.pop()             // стек зараз [outer, inner]

// const queue = [];
// queue.push(outer)       // черга зараз [outer]   
// queue.push(inner)       // черга зараз [outer, inner]   
// queue.push(inner)       // черга зараз [outer, inner, console.log]
// queue.shift()           // черга зараз [inner, console.log]   


// Event Loop
// function main() {
//     setTimeout(function greet() {
//         console.log('hello')
//     }, 2000);
// }

// main();

// // ==== Call Stack // Стек викликів
// main
// // ==== Web API
// // ==== Queue // Черга


// // ==== Call Stack // Стек викликів
// setTimeout(greet)
// main
// // ==== Web API
// // ==== Queue // Черга


// // ==== Call Stack // Стек викликів
// // ==== Web API
// greet // ... чекає 2 сек
// // ==== Queue // Черга

// // ==== Call Stack // Стек викликів
// // ==== Web API
// // ==== Queue // Черга
// greet


// // ==== Call Stack // Стек викликів
// greet
// // ==== Web API
// // ==== Queue // Черга

// // ==== Call Stack // Стек викликів
// console.log('hello')
// greet
// // ==== Web API
// // ==== Queue // Черга


// // ==== Call Stack // Стек викликів
// greet
// ==== Web API
// ==== Queue // Черга


// ==== Call Stack // Стек викликів
// ==== Web API
// ==== Queue // Черга


// FETCH
// fetch('url', 'options'); // за замовчування GET

// url - URL для надсилання запиту
// options - додаткові параметри: метод, заголовки тощо
// fetch повертає Promise


// Async/await
async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response)
    const result = await response.json();
    console.log(result)
}
getTodo();

// Promise
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// function addTodo() {
//     const data = {
//         email: "someemail@gmail.com",
//         password: 1234
//     }

//     fetch('https://jsonplaceholder.typicode.com/todos/1', {
//         method: "POST",
//         body: data
//     })
//       .then(response => response.json())
//       .then(json => console.log(json))
// }


// async function addTodo() {
//     const data = {
//         email: "someemail@gmail.com",
//         password: 1234
//     }

//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//         method: "POST",
//         body: data
//     });
//     const result = await response.json();
//     console.log(result)
// }

// fetch()

// GET
// POST
// PUT/PATCH
// DELETE