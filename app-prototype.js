'use strict';

// Prototype

// UI
// Book

const list = document.querySelector('.book-list');
const form = document.querySelector('.book-form');

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

// addBook +
// removeBook +
// clearFields
// showAlert

UI.prototype.addBook = function(book) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    list.appendChild(row);
}

UI.prototype.removeBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove()
    }
}

UI.prototype.clearFields = function() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.isbn').value = '';
}

UI.prototype.showAlert = function(messages, className) {
    const div = document.createElement('div');

    div.className = className;
    div.innerHTML = messages;

    form.before(div);
    setTimeout(() => {
        div.remove();
    }, 2000);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const isbn = document.querySelector('.isbn').value;

    const ui = new UI();
    
    if ([title, author, isbn].includes('')) {
        ui.showAlert('Заповніть всі поля', 'error');
    } else {
        const book = new Book(title, author, isbn);

        ui.addBook(book);
        ui.clearFields();
        ui.showAlert('Ви успішно додали книгу!', 'success');
    } 
})

list.addEventListener('click', (event) => {
    const ui = new UI();
    ui.removeBook(event.target)
})