'use strict';

// 4. Об'єкти в деталях

const id = Symbol.for("id");
// const id2 = Symbol.for("id");

const user = {
    [id]: 42,
    name: "Andrii",
    age: 20,
    role: "developer",
    isOnline: true,
    stack: ["HTML", "CSS", "JS"],
    sayHello: () => {
        console.log('Hello there!')
    },
    params: {
        height: 180,
        weight: 80,
    },
};

// const userName = 'name';
// user[id] = 24234;

// // console.log(user.name);
// // console.log(user[userName]);

// user.age = 25;
// delete user.isOnline;

// // console.log(user.isAdmin);

// // console.log('name' in user);

// // console.log(user);

// for (let key in user) {
//     // console.log(key)
// }

// // console.log(user.stack || 200);

// const users = [user, user, user];
// users.filter((user) => {
//     if (user.stack.includes('JS')) {
//         return user;
//     }
// })

// // delete user.params?.height // +
// // user.params?.height = 200 // -

// // console.log(Object.values(user))

// const formattedUser = Object.entries(user);
// // console.log(formattedUser);
// // console.log(Object.fromEntries(formattedUser));

// const users2 = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//       },
//       {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//       },
// ];

// users2.find((user) => {
//     if (user.email === '') {
//         return user;
//     }
// });

// const user2 = {
//     // ...
//     age: 40
// }

// if (
//     typeof user === 'object'
//     && user !== null
//     && !Array.isArray(user)
//     ) {
//     // console.log(user)
// }

let cloneObj = {};
for (let key in user) {
    cloneObj[key] = user[key]
}

// console.log(user);
// console.log(cloneObj);

cloneObj.params.height = 300;

const user2 = {
    isAdmin: true
}
let updatedObj = Object.assign(user2, user)
// console.log(updatedObj);

const userToString = JSON.stringify(user);
// console.log(userToString)
const parsedUser = JSON.parse(userToString)
// console.log(parsedUser)

const user3 = {
    name: "Oleh"
};

// Object.freeze(user3);

// user3.name = 'Alina';

// DATE

const date = '2023.03.02';

// console.log(new Date(date).getFullYear());

// console.log(new Date(2023, 0, 1));

// console.log(Date.now());

const start = Date.now();
// console.log('start: ', start);

// for(let i = 0; i < 1000000000; i++) {
//     user.age++
// }

const end = Date.now();
// console.log('end: ', end);

// console.log(end - start);

const dateNow = Date.now();
// console.log(dateNow)