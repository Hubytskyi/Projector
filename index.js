'use strict';

const resultByNumber = Number();
const resultByParseInt = parseInt('42px2', 10);
const resultByPlus = +'42';


// console.log('resultByNumber: ', resultByNumber)
// console.log('resultByParseInt: ', resultByParseInt)
// console.log('resultByPlus: ', resultByPlus)

const value = 42;
// console.log(value.toString());
// console.log(String(value));
// console.log(value + '')

const resultByBoolean1 = Boolean(42);
const resultByBoolean2 = !!null; 

// console.log(resultByBoolean2);

// BigInt

// console.log(BigInt(false));

// Перетворення в операціях
// Математичні

const result1 = true + 12 + 'hello' + null;
const result2 = 'some string' + 42n;


// console.log(result1)
// console.log(result2)

// Логічні
// console.log(10 * 2 * true);
// console.log(10 * 2 + null + '20');
// console.log(10 * 2 + null * '20');
// console.log(10 * true + (20 * false));
// console.log((10 * 5) - (null * '42') + '10' + 5); 

// 65, 50105


// ===========
// оператор || 

let user;

const userName1 = user || '' || null || 0;
// console.log('Hello, ', userName1)


let showUserName = true;
const userName2 = 'Dmytro';
const userNameForRendering = showUserName && true && 'dasdasd' && userName2;

// console.log(userNameForRendering)

const number = 42;
// console.log(number.toString());

const number2 = 42.42;
// console.log(parseInt('42px'));
// console.log(parseFloat('42.5px'))

// console.log(Math.random()); // 0 ... 1

// Math.round()
// console.log(Math.round(42.42));
// console.log(Math.round(42.9));

// Math.floor()
// console.log(Math.floor(42.9))

// Math.ceil()
// console.log(Math.ceil(42.1))

// Math.trunc
// console.log(Math.trunc(42.42))

const number3 = 42.123123123;
// console.log(number3.toFixed(3));

// String
const value2 = 42;

// console.log(`Number: ${value2}`)
// console.log('I\nWas\nBorn\nIn\nA\nHurricane');
// console.log('Пам\'ятати')

const text = 'The Best Is yet To Come';
// console.log(text.length)

// console.log(text[4]);
// console.log(text.charAt(4))

// for(let i = 0; i < text.length; i++) {
//     console.log(text[i])
// }

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// console.log(text.indexOf('Best', 5));
// console.log(text.includes('Come', -2));

// console.log(text.slice(4, 7));
// console.log(text.substring(4))

// console.log(' text ');
// console.log(' te     xt '.trim());
