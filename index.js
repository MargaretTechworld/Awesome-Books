
let buttonAdd = document.querySelector(".add-button");
let bookTitle = document.querySelector(".input-field1");
let bookAuthor = document.querySelector(".input-field2");
let bookShelf = document.querySelector(".books-section");

let awesomeBooks = [];

function addAwesomeBooks(){
  awesomeBooks.push({title: bookTitle.value, author: bookAuthor.value});
}

function clearInput(){
  bookTitle.value="";
  bookAuthor.value="";
}
function savedBooks(){
  window.localStorage.setItem("books",JSON.stringify(awesomeBooks));
}




buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  addAwesomeBooks();
  savedBooks();
  clearInput();
  console.log(awesomeBooks)
});

function showBooks(){
  const bookStored = JSON.parse(window.localStorage.getItem(awesomeBooks));
  let displayBooks = bookStored.map(
    (book) => `
  <p class="book-title">${addAwesomeBooks.title}</p>
  <p class="book-author">${addAwesomeBooks.author}</p>
  <button class="remove-button">Remove</button>
  <hr />
  `, );
  bookShelf.innerHTML= displayBooks.join("");
  }
  window.addEventListener("DOMContentLoaded", () => {
    showBooks();
  });