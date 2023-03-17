'use strict';

// OOP - 2

// const numbers = [1,2,3,4,5,6,7,8,9];

// function randomSort(array) {
//     return array.sort(() => {
//         return Math.round(Math.random() * 2 - 1)
//     })
// }

// console.log(randomSort(numbers));
// console.log(randomSort(numbers));

// Array.prototype.randomSort2 = function() {
//     return this.sort(() => {
//         return Math.round(Math.random() * 2 - 1)
//     })
// }

// console.log(numbers.randomSort2())
// console.log(numbers.randomSort2())

// class CPerson {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class CUser extends CPerson {
//     constructor(firstName, lastName, email, password) {
//         super(firstName, lastName)
//         this.email = email
//         this.password = password
//     }

//     getEmail() {
//         return this.email
//     }

//     getPassword() {
//         return this.password
//     }
// }

// const user = new CUser('John', 'Doe', 'johndoe@gmail.com', 1234)
// console.log(user.getFullName());

// function PPerson(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
// }

// const userObj = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// PPerson.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// const userObj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// userObj.getFullName()

// function PUser(firstName, lastName, email, password) {

//     // const p = new PPerson(firstName, lastName)
//     // this.firstName = p.firstName
//     // this.lastName = p.lastName

//     PPerson.call(this, firstName, lastName)
//     this.email = email
//     this.password = password
// }

// PUser.prototype = Object.create(PPerson.prototype)
// PUser.prototype.getEmail = function() {
//     return this.email
// }

// const pUser = new PUser('John', 'Doe', 'johndoe@gmail.com', 1234)
// console.log(pUser);

// ============================
// SOLID - S
// ============================

// class TodoList {
//     constructor() {
//         this.list = []
//     }

//     addTodo(text) {
//         const updatedList = [...this.list, text]
//         this.list = updatedList;
//     }

//     remove(index) {
//         this.list.splice(index, 1)
//     }

//     getItems() {
//         return this.list
//     }

    // [1,2,3,4]
    // this.list = [
    //     1,2,3,4, // ...[1,2,3,4]
    //     2,3 // ..[2,3]
    // ]
// }

// class StorageManager {
//     constructor(list) {
//         this.list = list
//     }
//     save() {
//         localStorage.setItem('todo', JSON.stringify(this.list))
//     }

//     load() {
//         const todoFromStorage = JSON.parse(localStorage.getItem('todo')) || [];
//         this.list = [
//             ...this.list,
//             ...todoFromStorage
//         ]
//     }
// }

// const todos = new TodoList()
// const storageManager = new StorageManager(todos.list)

// ============================
// SOLID - O
// ============================

// class Product {
//     constructor(name, price, category, height, weight) {
//         this.name = name
//         this.price = price
//         this.category = category
//         this.height = height
//         this.weight = weight
//     }
// }

// const productObj = {
//     name: '',
//     price: 123,
//     // ...
// }


// Погано так робити
// class ProductFilter {
//     filterByName(products, name) {
//         return products.filter((product) => product.name === name)
//     }

//     filterByCategory(products, category) {
//         return products.filter((product) => product.category === category)
//     }
// }

// function filterByValue(array, key, value) {
//     return array.filter((element) => element[key] === value)
// }

// ============================
// SOLID - L
// ============================

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     getWidth() {
//         return this.width
//     }

//     getHeight() {
//         return this.height
//     }

//     setWidth(value) {
//         this.width = value
//     }

//     setHeight(value) {
//         this.height = value
//     }

//     getArea() {
//         return this.width * this.height
//     }
// }

// class Square extends Rectangle {
//     constructor(size) {
//         super(size, size)
//     }

//     setWidth(value) {
//        this.width = this.height = value 
//     }

//     setHeight(value) {
//         this.height = this.width = value 
//      }
// }

// const square = new Square(2)
// square.setWidth(3)
// console.log(square.getArea());

// ============================
// SOLID - I
// ============================

class Phone {
    constructor() {
        if (this.constructor.name === 'Phone') {
            throw new Error('Phone class is absctract')
        }
      }
    makeCall(number) {}
    makePhoto() {}
    connectViaBlutooth() {}
}

const phone = new Phone()

class OldPhone {

}

class NewPhone {

}

class IPhone extends Phone { // NewPhone
    makeCall(number) {} // ok
    makePhoto() {} // ok
    connectViaBluetooth() {} // ok
}

class Nokia3310 extends Phone { // OldPhone
    makeCall(number) {} // ok
    makePhoto() {} // not ok
    connectViaBlutooth() {} // not ok
}

// ============================
// SOLID - D
// ============================

// class FileSystem {
//     writeToFile(data) {
//       //  якась логіка
//     }
// }

// class ExternalDB {
//     writeToDatabase(data) {
//       // якась логіка
//     }
// }

// class LocalPersistance {
//     push(data) {
//       //  якась логіка
//     }
// }

// class SePersistance {
//     push(data) {
//       //  якась логіка
//     }
// }

// class PersistanceManager {
//     saveData(db, data) {
//       if (db instanceof FileSystem) {
//         db.writeToFile(data)
//       }
  
//       if (db instanceof ExternalDB) {
//         db.writeToDatabase(data)
//       }
  
//       if (db instanceof LocalPersistance) {
//         db.push(data)
//       }
//     }
// }

// const manager = new PersistanceManager()
// manager.saveData(new FileSystem, [1,2,3,4])

// class FileSystem {
//     save(data) {
//       // якась логіка
//     }
//   }
  
//   class ExternalDB {
//     save(data) {
//       // якась логіка
//     }
//   }
  
//   class LocalPersistance {
//     save(data) {
//       // якась логіка
//     }
// }

// class SessionPersistance {
//     save(data) {
//       // якась логіка
//     }
// }


// class PersistanceManager {
//     saveData(db, data) {
//       db.save(data)
//     }
// }

// const manager2 = new PersistanceManager()
// manager2.saveData(new SessionPersistance, [1,2,3,4])