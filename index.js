'use strict';

// Async 3

// Помилка
// const commonError = new Error('Якась помилка');
// console.log(commonError.name)

// SyntaxError
// console.log(;) // SyntaxError: Unexpected token ';'

// ReferenceError
// console.log(result); // ReferenceError: result is not defined

// TypeError
// console.log(null.length) // TypeError: Cannot read properties of null

// RangeError
// const arr = new Array(1000000000000) // RangeError: Invalid array length

// URIError
// decodeURIComponent('%'); // URIError: URI malformed

// Custom Error
class DataTypeError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DataTypeError'
    }
}

// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new DataTypeError('Це не число')
//     }
//     return a + b
// }

// console.log(sum(2, undefined))

// try...catch 
// const data = 'Alina';

// try {
//     console.log('try')
//     const userName = JSON.parse(data); // Помилка
//     console.log(userName) // Пропускається
// } catch {
//     console.log('Трапилась помилка')
// }

// throw new DataTypeError('Це не число')

// Finnaly
// try {
//     console.log('try')
//     const userName = JSON.parse(data); // Помилка
//     console.log(userName) // Пропускається
// } catch {
//     console.log('Трапилась помилка')
// } finally {
//     console.log('finnaly')
// }

// try {
//     setTimeout(function() {
//         result
//     }, 1000)
// } catch(e) {
//     console.log('Щось трапилось')
// }

// setTimeout(function() {
//     try {
//         result
//     } catch(e) {
//         console.log(e)
//         console.log('Щось трапилось')
//     }
// })


    // try {
        // if () {
        //     throw new DataTypeError('Це не число')
        // }
    // } catch(e) {
    //     console.log(e.message)
    //     console.log('Щось трапилось')
        
    // } 

// Async/await

// async function f() {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const json = await result.json()

//         const result2 = await fetch('https://jsonplaceholder.typicode.com/todeos/1');
//         const json2 = await result.json();
//     } catch(e) {
//         console.log('Щось трапилось')
//         console.log(e.message)
//     }
// }

// f()

// const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(res) // Error