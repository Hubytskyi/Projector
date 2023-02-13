'use strict';

// 7. Advanced Functions (2)

// function sayHi() {
//     console.log('Hi!');
// }

// const timerId = setTimeout(sayHi, 2000);

// clearTimeout(timerId);

// function sayHi() {
//     for(let i = 0; i < 10000000; i++) {

//     }
// }

// const timerId = setInterval(sayHi, 2000);

// clearInterval(timerId);

// function sayHi() {
//     console.log('Hello')
//     timerId = setTimeout(sayHi, 2000)
// }

// let timerId = setTimeout(sayHi, 2000);

// const person = {
//     firstName: "Alina",
//     lastName: "Onopriienko",
//     id: 4242,
// };

// function getFullName () {
//     return person.firstName + " " + person.lastName;
// }

// person.getFullName = getFullName;

// console.log(person.getFullName())

// const person = {
//     firstName: "Alina",
//     lastName: "Onopriienko",
//     id: 4242,
//     getFullName: function () {
//         return person.firstName + " " + person.lastName;
//     }
// };

// console.log(person.getFullName());

// function getFullName() {
//     return this.firstName + " " + this.lastName;
// }

// const person1 = {
//     firstName: "Jane",
//     lastName: "Holovan",
//     id: 4343,
//     getFullName: getFullName
// };

// const person2 = {
//     firstName: "Dmytro",
//     lastName: "Loshak",
//     id: 4444,
//     getFullName
// };

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// const person = {
//     firstName: "Yana",
//     lastName: "Melnyk",
//     id: 4545,
//     roles: ['admin', 'superadmin'],
//     showRoles() {
//         this.roles.forEach((role) => {
//             console.log(this.firstName + ': ' + role)
//         });
//     },
//     sayHi() {
//         // this
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };
// person.sayHi()

// const person = {
//     firstName: "Andrii",
//     lastName: "Makhnyk",
//     id: 4646,
//     getFullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// };

// setTimeout(person.getFullName, 2000);

// const person2 = {
//     firstName: "Andrii",
//     lastName: "Makhnyk",
//     id: 4646,
//     getFullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// };

// const fullNameFunc = person2.getFullName;

// fullNameFunc()

// const person = {
//     firstName: "Andrii",
//     lastName: "Makhnyk",
//     id: 4646,
//     getFullName: function(isAdmin) {
//         console.log(this.firstName + " " + this.lastName, isAdmin);
//     }
// };

// person.getFullName.bind(person);

// function getFullName(isAdmin) {
//     console.log(this.firstName + " " + this.lastName, isAdmin);
// }

// const person1 = {
//     firstName: "Jane",
//     lastName: "Holovan",
//     id: 4343,
// };

// const person2 = {
//     firstName: "Dmytro",
//     lastName: "Loshak",
//     id: 4444,
// };

// getFullName.call(person1, true);

// function getFullName(...roles) {
//     console.log(this.firstName + " " + this.lastName, roles);
// }

// const person1 = {
//     firstName: "Jane",
//     lastName: "Holovan",
//     id: 4343,
// };

// const person2 = {
//     firstName: "Dmytro",
//     lastName: "Loshak",
//     id: 4444,
// };

// getFullName.apply(person1, ['admin', 'superadmin']);

// localStorage.setItem('history', []);

// const history = localStorage.getItem('history') || [];
// history