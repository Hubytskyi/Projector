'use strict';

// Async 2
// let loading = false;
// const promise = new Promise(async function(resolve, reject){ 
//     loading = true;
//     const response = await fetch('https://jsonplaceholder.typicode.com/todsos/1');

//     if (!response.ok) {
//         reject('something was wrong123')
//     }

//     const todo = await response.json()
//     resolve(todo)
// })

// resolve = then
// reject = catch
// finally - він відпрацьовує завжди

// promise
//     .then((todo) => {
//         console.log('todo: ', todo)
//     })
//     .catch((error) => {
//         console.error(error)
//     })
//     .finally(() => {
//         loading = false;
//         console.log('Проміс завершив виконання')
//     })


// Ланцюжок

// const userId = 1;
// const promise = new Promise(async function(resolve, reject){ 
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const user = await response.json()
//     resolve(user)
// })

// function getPostByUser(id) {
//     return new Promise(async function(resolve, reject){ 
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//         const posts = await response.json()
//         resolve(posts)
//     })
// }

// promise
//     .then((user) => {
//         const posts = getPostByUser(user.id);
//         return posts;
//     })
//     .then((posts) => {
//         console.log('posts: ', posts)
//     })


// Custom async func
// function fetchUsers() {
//     return new Promise(async function (resolve, reject) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

//         if (!response.ok) {
//             reject(new Error('error message'))
//         }

//         const users = await response.json();
//         resolve(users)
//     })
// }


// Promise.all
// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('promise 1 result')
//     }, 3000)
// })

// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('promise 2 result')
//     }, 5000)
// })

// const promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('promise 3 result')
//     }, 2000)
// })

// Promise.any([promise1, promise2, promise3])
//     .then((response) => {
//         console.log('then res: ', response)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

// FECTH
// fetch('url') // за замовчуванням method = GET
// fetch('url', {
//     method: 'POST'
// })

// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => {
//         return response.json();
//     })
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/', {
//     method: "POST",
//     body: {
//         completed: false,
//         id: 201,
//         title: "поспати",
//         userId: 1
//     },
//     headers: {

//     }
// })
//     .then(response => {
//         return response.json();
//     })
//     .then(json => console.log(json))

// async function fetchPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/possts');

//     if (!response.ok) {
//         throw new Error('some error')
//     }

//     const json = response.json();
//     return json
// }
// const promise = fetchPosts();

// promise
//     .then((response) => {
//         console.log('response: ', response)
//     })
//     .catch((error) => {
//         console.error('ERROR!!!: ', error)
//     })

// Відміна запиту

// const controller = new AbortController()

// function fetchData() {
//   return fetch('http://jsonplaceholder.typicode.com/posts ', {
//     signal: controller.signal,
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((e) => {
//       console.log(e)
//     })
// }

// fetchData()

// Якщо запит ще не був завершений, то він буде перерваний
// перерваний fetch поверне проміс з помилкою
// controller.abort()