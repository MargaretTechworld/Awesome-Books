const buttonAdd = document.querySelector('.add-button');
const bookTitle = document.querySelector('.input-field1');
const bookAuthor = document.querySelector('.input-field2');
const bookShelf = document.querySelector('.books-section');

let awesomeBooks = JSON.parse(localStorage.getItem('books')) || [];

function addAwesomeBooks() {
  awesomeBooks.push({ title: bookTitle.value, author: bookAuthor.value });
}

function clearInput() {
  bookTitle.value = '';
  bookAuthor.value = '';
}

function savedBooks() {
  localStorage.setItem('books', JSON.stringify(awesomeBooks));
}

function removeBook(index) {
  awesomeBooks.splice(index, 1);
  savedBooks();
  showBooks();
}

function showBooks() {
  const displayBooks = awesomeBooks.map((book, index) => `
    <div>
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <button class="remove-button" onclick="removeBook(${index})">Remove</button>
      <hr />
    </div>
  `);
  bookShelf.innerHTML = displayBooks.join('');
}

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault();
  addAwesomeBooks();
  savedBooks();
  showBooks();
  clearInput();
});

window.addEventListener('DOMContentLoaded', () => {
  showBooks();
});