'use strict';

// 3. Масиви в деталях

const users = ["Alina", "Dmytro", "Stas", "Andriy", "Jack", "Jane", "Jack"];
// console.log(Array.isArray('string'))

// console.log(users[users.length - 1]);
// console.log(users.at(-2));


// const updatedUsers = [...users];
// const newArrayLength = updatedUsers.push("Yana");
// console.log(newArrayLength)

// users.unshift("Anna");

// console.log(users);
// console.log('updatedUsers: ', updatedUsers);
// console.log(users);
// users.pop()
// console.log(users);
// delete users[1]
// console.log(users);
// console.log(["Alina", , "Dmytro", "Stas", "Andriy", "Jane"]);

// const updatedUsers2 = users.pop();
// const updatedUsers3 = users.shift();
// console.log(users);
// console.log(updatedUsers3);

for(let i = 0; i < users.length; i++) {
    // users[i] = `User - ${users[i]}`
    // console.log(users[i])
}

for (let user of users) {
    // console.log(user)
}

// FOREACH

users.forEach(function(user) {
    // console.log(user + '!')
})

users.forEach((user) => {

})

// "Alina", "Dmytro", "Stas", "Andriy", "Jane"
// const result = users.splice(1, 0, "Karyna");
// console.log(result);

// "Alina", "Dmytro", "Stas", "Andriy", "Jane"
const slicedUsers = users.slice(1, 3);

// console.log(users);
// console.log(slicedUsers);

const nums = [6, 2, 55, 4];
const mergedUsers = users.concat([1, 2, 3, 4]);
const mergedUsers2 = [...users, ...nums];
// console.log(mergedUsers2);

const updatedUsers = users.map(function(user) {
    return user.toUpperCase()
});

const updatedUsers2 = users.map((user) => {
    return user.toUpperCase()
});

// console.log(updatedUsers);

// const test = [...users].sort();
// console.log(nums.sort());
// console.log(nums.sort());


// [5, 2, 93, 4];
// nums.sort()

// console.log(nums);

// console.log(users.reverse())

const text = "Some, text";
// console.log(users.join('+')); // Array to string
// console.log(text.split(',')); // String to Array

//"Alina", "Dmytro", "Stas", "Andriy", "Jane"

const hasStas = users.includes("Stass");
// console.log(hasStas)
if (hasStas) {
    // ...
}

const hasJane = users.indexOf("Alina");
// console.log(hasJane)

if (hasJane > 0) {
    // ...
}

const findElement = users.find((user) => {
    return user === "Jack" ? user : null
})

// console.log(findElement);

const filteredUsers = users.filter((user) => {
    if (user[0] === "Dssss") {
        return user
    }
})

// console.log(filteredUsers)

const numbers = [
    [1,2,3],
    [4,'fgd',[6, [7, [8]]]]
]

const updatedUsers4 = numbers.flat(Infinity)
// console.log(updatedUsers4);

const findSomething = users.some((user) => {
    if (user.length > 15) {
        return user
    }
})

// console.log(findSomething);

const findAll = users.every((user) => {
    if (typeof user === 'string') {
        return user
    }
})

// console.log(findAll);

const numbers2 = [5, 7, 10, 12];
const total = numbers2.reduce((acc, cur) => {
    return acc + cur;
}, 10);

console.log(total);

// 10 + 5 = 5
// 5 + 7 = 12
// 12 + 10 = 22
// 22 + 12 = 34

// "Alina", "Dmytro", "Stas", "Andriy", "Jane"
const users2 = users;

const someResult = users.filter((user) => user[0] === 'D').map((user) => `${user}!`);