import BookCollection from './modules/bookcollection.js';
import { DateTime } from './modules/luxon.js';

const getTime = () => {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
const time = document.querySelector('.date-info');
setInterval(() => {
  time.innerHTML = getTime();
}, 1000);

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

listBook.addEventListener('click', () => {
  section1.style.display = 'block';
  section1.style.paddingBottom = '50px';
  section2.style.display = 'none';
  section3.style.display = 'none';
  logo.innerHTML = 'Awesome Books';
});

newBook.addEventListener('click', () => {
  section1.style.display = 'none';
  section2.style.display = 'block';
  section2.style.paddingTop = '160px';
  section3.style.display = 'none';
  logo.innerHTML = 'Add Book';
});

contact.addEventListener('click', () => {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'block';
  section3.style.paddingTop = '160px';
  logo.innerHTML = 'Contact';
});
