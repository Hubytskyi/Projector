'use strict';
var aTest1;
// Згадаємо минулі вебінари

// console.log(!!0); // true, false
// console.log(!![]); // true, true
// console.log('' || 0 || false); // '', 42, undefined
// console.log(true && [] && {}); // 0, Error, 
// console.log(101 && true && [] && {}); // {}


const number = 42.13;
// console.log(number.toFixed(1)); // 42.1
// console.log(typeof number.toFixed(1)); // number, string

const text = 'text';
// console.log(text.charAt(2)); // 'te', 'x'

const text2 = 'My mama said I had a devil to scratch my soul';
// console.log(text2.includes('soul')); // true, 

const array = [1, 4, 6, 7];
const popResult = array.pop()
// console.log(array);  // [1, 4, 6]
// console.log(popResult); // 7 

const resultOfSomeMethod = 'array.find(el => el === 7)';
// forEach, find

// 6. Advanced Functions

// function myBio(firstName, lastName, ...otherInfo) {
//     return otherInfo;
// }

// console.log(myBio("Anna", "Borets", "Developer", "Female"));

// function sum(a, b) {
//     const sum = a + b;
//     return sum;
//   }

//   function sumAll(...args) {
//     let sum = 0;

//     for (let arg of args) {
//       sum += arg;
//     };

//     return sum;
//   }

//   sumAll(1); // 1
//   sumAll(1, 2); // 3
//   sumAll(1, 2, 3); // 6

//   function sumAll(a, b, ...args) {
//     let sum = a + b;

//     for (let arg of args) {
//       sum += arg;
//     };

//     return sum;
//   }

//   sumAll(1); // 1
//   sumAll(1, 2); // 3
//   sumAll(1, 2, 3); // 6

//   function myBio(firstName, lastName, position) {
//     return `${firstName} ${lastName} is ${position}`;
//   }

//   const array2 = ["Andrii", "Makhnyk", "Developer"];

//  console.log( myBio(...array2)); // "Andrii", "Makhnyk", "Developer"


// const a = 'global';

// function outer() {
//   const b = 'outer';
//   function inner() {
//     const c = 'inner'
//     console.log(c);
//     console.log(b);
//     console.log(a);
//   }
//   console.log(a);
//   console.log(b);
//   inner();
// };

// outer();
// console.log(a);

// const a = 'Hello World!';

// function first() {
//   let b = 25;

//   console.log('Inside first function');
// };

// first();
// console.log('Inside global execution context');

// // globalLexicalEnvironment = {
// //     environmentRecord: {
// //         a     : 'Hello World!',
// //         first : < reference to function object >
// //     }
// //     outer: null
// //   }

// const name = 'Стас';

// function getPersonName() {
//   const name = 'Діана';

//   return function displayName() {
//     console.log(name);
//   };
// };

// const person = getPersonName();
// person();
// let counter = 0;

// function getCounter() {
//     return ++counter;
// };
// // return function () {

// console.log(getCounter());
// console.log(getCounter());
// counter = 100;
// console.log(getCounter());
// console.log(getCounter());

// function getCounter() {
//     let counter = 0;
//     return function() {
//       return counter++;
//     }
//   };

//   const count = getCounter(); //return function() {
   
//   console.log(count());
//   console.log(count());
//   console.log(count());

//   const count2 = getCounter();

//   console.log(count2());
//   console.log(count2());
//   console.log(count2());

// console.log(globalThis);
// console.log(window);


// function aTest() {

// }

// console.log(window.aTest1);
// var aTest1 = 53;
// console.log(window.aTest1);


// const aTest2 = 53;
// console.log(aTest1);
