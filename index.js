'use strict';

// 5. Основи роботи з функціями

// function sum(a, b = 4) {
//     console.log('inside func');
//     const result = a + b;
//     if (result > 5) {
//         return 'more than 5'
//     }
//     return 'less';
// }

// const result = sum(2, 6);

// function sayGreeting(name) {
//     return `Hello ${name}`;
//   };
  
//   console.log(sayGreeting('Alina'));

// let greeting = "Hey";

// function sayGreeting(name) {
//   return `${greeting} ${name}`;
// };

// console.log(sayGreeting('Alina'));

// function findUser(users, item) {
//     // Create the clone of users array and then reverse
//     const reversedUsers = [ ...users].reverse();

//     // Find the element in the cloned array
//     const found = reversedUsers.find((user) => {
//         return user === item;
//     });

//     // Return the found element
//     return found;
// };

// console.log(sum(2, 5))

// function sum(a, b) {
//     return a + b;
// };

// const sum = function(a, b) {
//     return a + b
// };

// console.log(sum(2,4));

// const sum = (a, b) => {
//     return a + b;
// };

// console.log(sum(2, 4));

// const sum2 = (a, b) => a + b;

// console.log(sum2(2, 4));

// const squared = a => a * a;
// console.log(squared(2))

// const sum2 = () => {
//     return 4 + 4
// }

// const sum = (function() {
//     return 2 + 2
// })();

// const result = sum2()

// console.log(sum)
// console.log(result)






  







// function processUserInput(cb) {
//     const name = prompt("Please enter your name.");
//     cb(name);
// };

// function showAlert(name) {
//     alert(`Hello, ${name}`);
// };

// function showConsole(name) {
//     console.log(`Hello, ${name}`);
// };
  
// processUserInput(showConsole);

// function pow(x, n) {
//     if (n === 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   };
  
//   console.log(pow(2, 3));

//   function pow(x, n) {
//     if (n === 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   };
  
//   console.log(pow(obj));

// sum();

// const sum = function() {
//     console.log('call')
// };

// sum();

/**
  * Повертає x у n-му ступені.
  *
  * @param {число} x Число для підвищення.
  * @param {число} n Степінь має бути натуральним числом.
  * @return {число} x у n-му ступені.
  */

function pow(x, n) {
    // ...
 }