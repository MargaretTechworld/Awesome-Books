/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    } 
  }
  
  class BookStore {
    constructor() {
      this.library = JSON.parse(localStorage.getItem('library')) || [];
    }
    
    addBook(title, author) {
      const book = new Book(title, author);
      this.library.push(book);
      localStorage.setItem('library', JSON.stringify(this.library));
    }
    
    removeBook(index) {
      this.library.splice(index, 1);
      localStorage.setItem('library', JSON.stringify(this.library));
      this.showBook();
    }
    showBook() {
      const container = document.querySelector('.books-section');
      this.library.forEach((book, index) => {
        const bookShelf = document.createElement('div');
        bookShelf.classList.add('book-shelf');
        bookShelf.innerHTML =` 
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <button class="remove-button" onclick="removeBook(${index})">Remove</button>
        <hr />`
        container.appendChild('bookShelf');
        
      })
        const removeButton = document.querySelectorAll('.remove-button');
        
        removeButton.forEach(btn => {
          btn.addEventListener('click', (e) => {
            const { index } = e.target.dataset;
            this.removeBook(index);
          });
      })
    }
  }
  
  const bookStore = new BookStore();
  
  
  function add() {
    let titleInput = document.querySelector('.input-field1').value;
    let authorInput = document.querySelector('.input-field2').value;
    if (titleInput !== '' && authorInput !== '') {
      bookStore.addBook(titleInput, authorInput);
    } 
    
    titleInput = '';
    authorInput = '';
  };
  
  bookStore.showBook();