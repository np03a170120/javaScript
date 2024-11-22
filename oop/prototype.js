// constructor
function Book(author, title, year) {
  this.author = author;
  this.title = title;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.author} is the author of ${this.title}, published in ${this.year}`;
};

Book.prototype.getAge = function () {
  const age = new Date().getFullYear() - this.year;
  return `${this.title} is ${age} years old`;
};

Book.prototype.revise = function (new_year) {
  this.new_year = new_year;
  this.revised = true;
};

// intiate an object
const book1 = new Book("season", "revenge", "2019");
const book2 = new Book("naive", "revenge to all", "2020");

book1.revise("2024");
console.log(book1);
