/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/* eslint-disable-line no-unused-vars */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('books')) || [];
    this.buttonAdd = document.querySelector('.add-button');
    this.bookTitle = document.querySelector('.input-field1');
    this.bookAuthor = document.querySelector('.input-field2');
    this.bookShelf = document.querySelector('.books-section');

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
    const displayBooks = this.collection.map((book, index) => `
      <div class="book-store">
        <div class="store-text">
          <p class="book-title">"${book.title}"</p>
          <p class="by-text">by</p>
          <p class="book-author">${book.author}</p>
        </div>
        <button class="remove-button" onclick="bookCollection.removeBook(${index})">Remove</button> 
      </div>
    `);
    this.bookShelf.innerHTML = displayBooks.join('');
  }
}

const bookCollection = new BookCollection();
bookCollection.addBook();

// Modify to make it a Single Page Application

const listBook = document.querySelector('.link-list');
const newBook = document.querySelector('.link-new');
const contact = document.querySelector('.link-contact');

const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');

const logo = document.querySelector('.logo');

const dateInfo = document.querySelector('.date-info');

const seperator = document.querySelector('.seperator');

listBook.addEventListener('click', () => {
  section1.style.display = '';
  section1.style.paddingBottom = '50px';
  section2.style.display = 'none';
  section3.style.display = 'none';
  seperator.style.display = 'none';
  logo.innerHTML = 'Awesome Books';
});

newBook.addEventListener('click', () => {
  section1.style.display = 'none';
  section2.style.display = '';
  section2.style.paddingTop = '160px';
  section3.style.display = 'none';
  logo.innerHTML = 'Add Book';
});

contact.addEventListener('click', () => {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = '';
  section3.style.paddingTop = '160px';
  logo.innerHTML = 'Contact';
});

// Add date to page

const d = new Date();
const year = d.getFullYear();
let date = d.getDate();
const month = d.getMonth();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();
let ampm;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if (date === 1 || date === 21 || date === 31) {
  date = `${date}st`;
} else if (date === 2 || date === 22) {
  date = `${date}nd`;
} else {
  date = `${date}th`;
}

if (hour < 12) {
  ampm = 'am';
} else {
  ampm = 'pm';
}

dateInfo.innerHTML = `${months[month]} ${date} ${year}, ${hour}:${minute}:${second}${ampm}`;