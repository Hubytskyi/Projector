'use strict';

// 8. Основи роботи з DOM

// console.log(window.location);
// console.log(window.navigator);

// console.log(document)


// console.log(document.body.childNodes)
// console.log([...document.body.childNodes])
// console.log(Array.from(document.body.childNodes))

// console.log(document.body.firstElementChild)

// console.log(document.body.childNodes);
// console.log(document.body.children);

const title = document.getElementById('main-title');
// console.log(title);

// console.log(document.getElementsByTagName('h2'));
// console.log(document.getElementsByClassName('list'));

// console.log(document.querySelectorAll('h2'));
// console.log(document.querySelector('.item'));

const headers = document.querySelectorAll('h2');
// console.log(headers);

// console.log(document.body.children)
// for (let elem of document.body.children) {
//     if (elem.matches('.title')) {
//         console.log(title);
//     }
// }

const list = document.querySelector('.list');
const secondTitle = document.querySelector('.second-title');
// console.log(list.closest('section').previousElementSibling);
const section = document.querySelector('section')
// console.log(section.contains(document.querySelector('.list')))
// console.log(section.contains(secondTitle))

const listItem = document.createElement('li');
// list.append(document.createElement('li'))
// list.append(listItem)
// console.log(listItem);

// list.replaceWith(listItem);
const div = document.createElement('div');
// list.insertAdjacentHTML('beforeend', '<div class="s">123</div>');

// section.insertAdjacentElement('afterbegin', div);
// section.insertAdjacentText('afterbegin', 'asdasd');

// list.innerHTML = '<li> Item 1</li>'
// const copiedList = list.cloneNode(true);
// const copiedList2 = list.cloneNode(false);
// console.log(copiedList)

// list.remove()
// secondTitle.className = 'fourth-title';
// console.log(secondTitle.className)

// secondTitle.classList.remove('test')
// console.log(secondTitle.classList.contains('test'))
// console.log(secondTitle.classList.toggle('test'))

// title.style.height = '200px';
// title.style = 'background-color: green; color: #fff'

// console.log(getComputedStyle(title).getPropertyValue('height'))
// section.style.border = '10px solid green';
// console.log(section.clientWidth)