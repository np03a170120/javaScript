// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jen",
  marker: "O",
};

// object constructor
// specific type of object that you need to duplicate

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const PlayerOneX = new Player("Season", "X");

// PlayerOneX.sayName();

// Exercise

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `${title} by ${author}, ${pages}, not read yet`;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295");

// The Prototype

Book.prototype.sayHello = function () {
  console.log("Hello");
};

// prototypal inheritence

function Developer(name) {
  this.name = name;
}

Developer.prototype.sayName = function () {
  console.log("My name is", this.name);
};

function Stack(name) {
  this.name = name;
}

Object.setPrototypeOf(Stack.prototype, Developer.prototype);

const season = new Stack("British");

season.sayName();
