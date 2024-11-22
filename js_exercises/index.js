function searchByName(listOfFruits, fruit) {
  for (var i in listOfFruits) {
    if (listOfFruits[i].name === fruit) {
      return console.log(listOfFruits[i].name);
    }
  }
  return console.log("Fruits not found!");
}

function searchBykey(listOfFruits, key, query) {
  for (var i in listOfFruits) {
    var value = listOfFruits[i][key];

    if (value === query) {
      return console.log(listOfFruits[i].name);
    }
  }

  return console.log("Fruits not found!");
}

var fruits = [
  { id: 1, name: "apple", color: "red" },
  { id: 2, name: "mango", color: "yellow" },
];

// searchByName(fruits, "mango");
searchBykey(fruits, "color", "pink");
