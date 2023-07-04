const buttonAdd = document.querySelector('.add-button');
const bookTitle = document.querySelector('.input-field1');
const bookAuthor = document.querySelector('.input-field2');
const bookShelf = document.querySelector('.books-section');

const awesomeBooks = JSON.parse(localStorage.getItem('books')) || [];

function addAwesomeBooks() {
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    awesomeBooks.push({ title: bookTitle.value, author: bookAuthor.value });
  }
}

function clearInput() {
  bookTitle.value = '';
  bookAuthor.value = '';
}

function savedBooks() {
  localStorage.setItem('books', JSON.stringify(awesomeBooks));
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

function removeBook(index) { // eslint-disable-line no-unused-vars
  awesomeBooks.splice(index, 1);
  savedBooks();
  showBooks();
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