// constructor
function Book(author, title, year) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.getSummary = function () {
    return `${author} is the author of ${title}, published in ${year}`;
  };
}

// intiate an object
const book1 = new Book("season", "revenge", "2019");
const book2 = new Book("naive", "revenge to all", "2020");

console.log(book1.getSummary());
