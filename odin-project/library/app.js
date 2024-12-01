const books = document.querySelector("#books");
const modal = document.querySelector("#modal");
const addBook = document.querySelector("#addBook");
const closeBtn = document.querySelector("#close-btn");
const book_form = document.querySelector("#form");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

const books_store = [];

addBook.addEventListener("click", () => {
  modal.setAttribute("open", "");
});

closeBtn.addEventListener("click", () => {
  modal.removeAttribute("open", "");
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  books_store.push(book);
}

modal.addEventListener("submit", (e) => {
  e.preventDefault();

  let title_value = title.value;
  let author_value = author.value;
  let pages_value = pages.value;

  addBookToLibrary(title_value, author_value, pages_value);
  book_form.reset();
  displayBooks();
});

function displayBooks() {
  books.innerHTML = "";
  books_store.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `Title: ${item.title}, Author:${item.author}, Pages:${item.pages}`;
    books.append(li);
  });
}
