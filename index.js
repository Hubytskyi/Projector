// USE SCTRICT

// 'use strict';

// var, let, const
// someVar = 10;
// console.log(someVar)

function func() {
    // const arguments = 'Some text';
    // console.log(arguments)
}

func('asdasdas');

// ;
const someVar = 'asdasd';

// одностроковий коментар 
// 

/*
    багатостроковий 
    коментар
*/

// TODO: to do something


let message;
const message1 = 'some text';

message = 'some text2';
// message1 = 'some text1';

const status = 'done';
const Status = 'done';

const $status = 'reject';

const user1 = 'Maksym';

// let return

const camelCase = 'text';
const PascalCase = 'pascal text';

const sname_case = 'snake';
const SNAME_SNAKE = 'SNAME_SNAKE';

// ==============================
// ТИПИ ДАНИХ

// Number
const number = 10;
let number2 = 10;

// console.log(typeof Infinity);

const someText = 'text';
const someText2 = someText;

// console.log(number * someText);
// console.log(`sadsdas: ${someText}`)

const isOpen = false;

const lastMessage = {
    fromUserId: 1234,
    toUser: 2345,
    timeStamp: 123123123,
    text: 'some text',
    isSent: true
}

let user = null;
let user2;

user = 'Dima';

// console.log(lastMessage.user)
// console.log(user2)

function func() {

}

// console.log(typeof user)
// console.log(typeof number)
// console.log(typeof null)
// console.log(typeof undefined)

// number, string, boolean, symbol, bigint, object, null, undefined

// false = 0, '', false, null, undefined

const num1 = 123n;
// console.log(num1)


// ==============================
// ОПЕРАТОРИ

// console.log(1 + 2)
// console.log(3 - 2)
// console.log(3 * 2)
// console.log(3 / 2)
// console.log(10 % 2)
// console.log(10**2)

// let counter = 10;
// counter = counter + 1
// counter++
// counter--
// console.log(counter)

// console.log(10 < 20)
// console.log(10 > 20)
// console.log(10 >= 11)
// console.log(10 >= 11)

// console.log(10 === '10');

const isCat = true;
const isBlack = false;
const hasHair = false;

if (isCat || isBlack || hasHair) {
    // якщо хоча б один true
    // console.log('some code')
}

const isDog = true;
const isBrown = true;
const hasTail = true;

if (isCat && isBlack && hasHair) {
    // якщо всі true
    // console.log('some code')
}

let userName = '';
const customerName = userName || 'Stas';
// console.log(customerName)

if (!isDog) {
    // console.log('You are dog')
}

// console.log(!!'some text')

const someVar1 = ''

// ==============================
// ЦИКЛИ

// WHILE
let counter = 0;
while (counter < 10) {
    counter++;
    // console.log(counter);
    // counter = counter + 1
}

// DO...WHILE
let counter2 = 0;

do {
    // console.log(counter2);
    counter2++;
} while (counter2 < -100)

let index = 0;
// FOR
for (index = 0; counter < 20; counter++) {
    // console.log(counter)
}

// BREAK
for (let i = 0; i < 20; i++) {
    // console.log(i)
    if (i === 5) break;
}

// BREAK
for (let i = 0; i < 100; i++) {
    if (i % 10) continue;
    // console.log(i)
}

// ==============================
// УМОВНІ КОНСТРУКЦІЇ

// IF
let isHuman = false;
const humanAge = 31;

if (isHuman && humanAge === 30) {
    // console.log('You are human and you age is 30')
} else if (isHuman && humanAge < 30) {
    // console.log('You are human and you age less than 30')
} else if (isHuman && humanAge < 30) {
    // console.log('You are human and you age less than 30')
} else {
    // console.log("I don't know who are you")
    // console.log("I don" + " ' " + "t know who are you")
}

const result = isHuman ? 'human' : 'animal';
// console.log(result)
let isAnimal = false;
const result2 = isHuman ? 'human' : isAnimal ? 'animal' : 'fish';
// console.log(result2)

// SWITCH 
switch (result2) {
    case 'animal':
        // console.log('You are animal');
        break;
    case 'fish':
        // console.log('You are fish');
        break;
    default:
        // console.log('You are human')
}

const customer = 'Dmytro';
const USER_DMYTRO = 'Dmytro';
let welcomeMessage = 'Welcome';

switch ('Stas') {
    case USER_DMYTRO:
        welcomeMessage = `${welcomeMessage} ${USER_DMYTRO}`;
        break;
    case 'Stas':
        welcomeMessage = 'Welcome Stas';
        break;
    case 'Dima':
    case 'Dmytro':
        welcomeMessage = 'Welcome Dima 222';
        break;
}

// console.log(welcomeMessage)

// ============================
// КОПІЮВАННЯ

let dog1 = 'dog';
const dog2 = dog1;

dog1 = 'cat';

// console.log(dog1)
// console.log(dog2)



const dogObj = {
    type: 'dog',
    obj: {
        
    }
}

const dog3 = dogObj;
dog3.type = 'fish'

const obj1 = {
    type: 'one'
}

const obj2 = {
    type: 'one'
}


// console.log(obj1 === obj2)
// console.log(dog3)

// VAR
var city = 'Kyiv';
var city = 'Lviv';

// let city2 = 'Kyiv';
// let city2 = 'Lviv';

var greeting = 'say hi!';
for (let i = 0; i < 2; i++) {
    var hello = 'say hello!';
}
// console.log(hello)

const greeting2 = 'say hi!';
for (let i = 0; i < 2; i++) {
    const hello2 = 'say hello!';
}

// console.log(hello2)

// console.log(first)
// console.log(second)

var first = 'first';
let second;

function func2() {
    // second
}

const user42 = 'Ivan';
const userName2 = user42 ?? 'Petro'; // user42 || 'Petro'