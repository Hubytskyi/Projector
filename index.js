'use strict';

// ООП - 1

// =================================
// Objects
// =================================

// const Human = {
//     name: "Anna",
//     type: 'human',
//     sayPhrase: () => console.log('I can cook!'),
//     cook: () => console.log('Bon appetit!')
// }

// const Dog = {
//     name: "Loki",
//     type: 'animal',
//     sayPhrase: () => console.log('I like to eat, sleep and run'),
//     eat: () => console.log('Sooo delicious!')
// }

// const Tree = {
//     name: "Oak",
//     type: 'plant',
//     sayPhrase: () => console.log(`I'm tree`),
//     noise: () => console.log('shshshshshshhhshs')
// }

// =================================
// Classes
// =================================

// class Human {
//     constructor(name, phrase) {
//         this.name = name;
//         this.phrase = phrase;
//         this.type = 'human'
//     }

//     sayPhrase = () => console.log(this.phrase);
//     cook = () => console.log(`My name is ${this.name} and I like to cook`)
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//         this.type = 'animal'
//     }

//     run = () => console.log(`My name is ${this.name}. I can run!`);
// }

// class Tree {
//     constructor(name) {
//         this.name = name;
//         this.type = 'plant'
//     }

//     noise = () => console.log(`shshshshshs`);
// }

// const anna = new Human('Anna', 'I like to cook!'); 
// const stas = new Human('Stas', 'I like to cook!');
// anna.cook();
// stas.cook();

// const loki = new Dog('Loki');
// loki.run()

// const oak = new Tree('Oak');
// oak.noise();

// =================================
// Успадкування
// =================================

// class Animal {
//     constructor(isMeatEating) {
//         this.isMeatEating = isMeatEating
//     }

//     eatMeat() {
//         if (this.isMeatEating) {
//             console.log('I like to eat meat')
//         } else {
//             console.log('I dont like eat meat')
//         }
//     }
// }

// class Pets extends Animal{
//     constructor(name, isMeatEating) {
//         super(isMeatEating);
//         this.name = name;
//         this.type = 'animal'
//     }

//     run = () => console.log(`My name is ${this.name}. I can run!`); 
// }

// class Dog extends Pets{
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }

//     eat = () => console.log('I like to eat!');
// }

// class Cat extends Pets{
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }

//     eat = () => console.log('I like to eat!');
//     run = () => console.log(`I'm cat, and I like to run`)
// }

// const lucky = new Cat('Lucky', true);
// const loki = new Dog('Loki', false);
// console.log(loki)
// console.log(lucky)

// lucky.eatMeat();
// loki.eatMeat();

// =================================
// Інкапсуляція / абстракція
// =================================

// class CoffeeMachine {
//     #counter;
//     constructor(name) {
//         this.name = name;
//         this.#counter = 0;
//     }

//     makeCoffee(isCapp) {
//         this.#counter = this.#counter + 1;
//         if (this.#counter > 5) {
//             console.log('Потрібно почистити машинку!')
//             return;
//         }
//         if (isCapp === 'capp') { // isCapp = 0, '', false, undefined, null
//             this.#warnMilk();
//         }
//         console.log('Ви успішно приготували каву!');
//     }

//     #warnMilk() {
//         console.log('Ви успішно підігріли молоко')
//     }
// }

// const franke = new CoffeeMachine('Franke');
// console.log(franke)
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee('capp');


// franke.#warnMilk = '1234'
// franke.makeCoffee = '1234'

// console.log(franke)

// =================================
// Поліморфізм
// =================================

// class Animal {
//     constructor(isMeatEating) {
//         this.isMeatEating = isMeatEating
//     }

//     eatMeat() {
//         if (this.isMeatEating) {
//             console.log('I like to eat meat')
//         } else {
//             console.log('I dont like eat meat')
//         }
//     }

//     eat = () => console.log(`I'm animal and i like to eat!`);
// }

// class Pets extends Animal{
//     constructor(name, isMeatEating) {
//         super(isMeatEating);
//         this.name = name;
//         this.type = 'animal'
//     }

//     eat = () => console.log(`I'm pet and i like to eat!`);
//     run = () => console.log(`My name is ${this.name}. I can run!`); 
// }

// class Dog extends Pets{
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }
// }

// class Cat extends Pets{
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }
    
//     run = () => console.log(`I'm cat, and I like to run`)
// }

// const animal = new Animal('Animal');
// const pet = new Pets('Pet');
// const dog = new Dog('Dog');
// const cat = new Cat('Cat');

// animal.eat();
// pet.eat();
// dog.eat();
// cat.eat();

// console.log(1 + 1);
// console.log('1' + '1');

// function showDataInConsole(data) {
//     if (Array.isArray(data)) {
//         data.forEach(d => console.log(d))
//     }

//     if (typeof data === 'string') {
//         console.log(data)
//     }
// }

// showDataInConsole([1,2,4]);
// showDataInConsole('123');

// const obj = {};
// const str = '123';
// const num = 234;

// console.log(obj.toString())
// console.log(str.toString())
// console.log(num.toString())


// =================================
// Композиція
// =================================

// class Pets{
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Pets{
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }
// }

// class Cat extends Pets{
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }
// }

// class Spider extends Pets {
//     constructor(name, isMeatEating) {
//         super(name, isMeatEating)
//     }
// }

// const lucky = new Cat('Lucky');
// const loki = new Dog('Loki');
// const gosha = new Spider('Gosha');


// function addAbilityMeow(obj) {
//     obj.meow = () => console.log('Мяв!')
// }
// addAbilityMeow(loki);
// addAbilityMeow(lucky);

// lucky.meow()
// loki.meow()
