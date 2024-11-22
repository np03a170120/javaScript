function Book(author, title, year) {
  this.author = author;
  this.title = title;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.author} is the author of ${this.title}, published in ${this.year}`;
};

function Magazine(author, title, year, month) {
  Book.call(this, author, title, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Nischal", "The Avange", "2019", "june");

console.log(mag1.getSummary());
