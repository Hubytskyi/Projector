'use strict';

// 22. Set/WeakSet, Map/WeakSet, Destructuring, Spread

// const set = new Set();

// String
// set.add('Alina');
// set.add('Stas');
// set.add('Diana');

// Object
// const user = {name: 'Alina'};
// set.add(user);
// set.add({name: 'Alina'});

// set.add('Alina');
// set.add(['Andriy']);
// set.add(['Andriy']);

// console.log(set)

// const isRemoved = set.delete('Alina');
// console.log(isRemoved)
// console.log(set)

// const hasUser = set.has('Stas');
// console.log(hasUser);
// console.log(set)
// console.log(set.size)
// set.clear();
// console.log(set)

// const nums = [1,2,3,4,5,6,6,6,7,7,8,9,0];

// const uniqueNums = new Set(nums);

// console.log(nums);
// console.log(uniqueNums);

// console.log(Array.from(uniqueNums));
// console.log([...uniqueNums]);

// set
//     .add(1)
//     .add(1)
// console.log(set)

// set.forEach((user) => console.log(user))

// Map

// const map = new Map();
// const a = {a: 1};

// const obj = {
//     '1': 'num1',
//     '1': 'num2',
//     'true': 'bool1',
//     [a]: 'obj1' // [object Object]: 'obj1'
// }

// map.set(1, 'num1');
// map.set('1', 'num2');
// map.set(true, 'bool1');
// map.set(a, 'obj1');

// console.log(obj); // 
// console.log(map); // 

// const map = new Map([
//     [1, 'num1'],
//     ['1', 'num2'],
//     [true, 'bool1'],
// ]);

// console.log(map.get('true'));

// map.delete(true);


// map.clear();
// console.log(map.has('2222'))

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for (let key of map.keys()) {
//     console.log(key)
// }

// for (let val of map.values()) {
//     console.log(val)
// }

// for (let el of map.entries()) { // for (let el of map)
//     console.log(el)
// }

// map
//     .set('2', 'value...')
//     .set('3', 'value...3')

// console.log(map)

// map.forEach((value, key) => {
//     console.log(key, value)
// })

// const weakSet = new WeakSet([{}]);
// const weakMap = new WeakMap([
//  [{}: any]
// ]);

// Декструктуризація

// const user = ["Jane", "Butusova"];
// console.log(user[0]);
// console.log(user[1]);
// const [firstName, lastName = "Some text"] = ["Jane", "Butusova"];
// console.log(firstName, lastName)

// const arr = ["Jane", "Butusova", "JS", "HTML", "CSS"]

// const [firstName, lastName, ...stack] = arr; // ... - спред оператор, stack - це залишок
// console.log(firstName) // "Jane"
// console.log(lastName) // "Butusova"
// console.log(stack) // ["JS", "HTML", "CSS"]

// const pet = {
//     breed: 'Lab',
//     name: "Loki",
//     color: "Chocolate"
// }

// const { breed, name, color } = pet;
// const breed = pet.breed;


// const pet = {
//     breed: 'Lab',
//     name: "Loki",
//     color: "Chocolate"
// }

// const { breed, name, color = "Gold" } = pet;
// const name = "Andriy";


// const pet = {
//     breed: 'Lab',
//     namenamenamenamenamenamenamenamename: "Loki",
//     color: "Chocolate",
//     weight: 35,
//     height: 50
// }

// const { breed, namenamenamenamenamenamenamenamename: name, ...info } = pet;
// const petName = pet.name;

// console.log(name)
