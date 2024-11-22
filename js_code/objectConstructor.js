function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const person = new Player("Season", "X");

// console.log(person.name);

function Book(title, author, pages, status) {
  this.info = function () {
    return `${title} ${author} ${pages} ${status}`;
  };
}

const hobbit = new Book("Hobbit", "JK Rowling", "86", "read");

console.log(hobbit.info());
