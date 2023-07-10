import Book from './bookclass.js';

export default class BookCollection {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('books')) || [];
    this.buttonAdd = document.querySelector('.add-button');
    this.bookTitle = document.querySelector('.input-field1');
    this.bookAuthor = document.querySelector('.input-field2');
    this.bookShelf = document.querySelector('.books-section');
    // this.removeButton = document.querySelectorAll('remove-button')
    this.showBooks();
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      this.addBook();
      this.saveBooks();
      this.showBooks();
      this.clearInput();
    });
  }

  addBook() {
    if (this.bookTitle.value !== '' && this.bookAuthor.value !== '') {
      const book = new Book(this.bookTitle.value, this.bookAuthor.value);
      this.collection.push(book);
    }
  }

  removeBook(index) {
    this.collection.splice(index, 1);
    this.saveBooks();
    this.showBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.collection));
  }

  clearInput() {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  showBooks() {
    const displayBooks = this.collection.map((book, index) => `<div class="book-store">
        <div class="store-text">
          <p class="book-title">"${book.title}"</p>
          <p class="by-text">by</p>
          <p class="book-author">${book.author}</p>
        </div>
        <button class="remove-button" data-index="${index}">Remove</button>
      </div>`);
    this.bookShelf.innerHTML = displayBooks.join('');

    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const { index } = btn.dataset;
        this.removeBook(index);
      });
    });
  }
}