// object literal syntax

const person = {
  firstName: "season",
  secondName: "shrestha",
  behaviour: function () {
    console.log("Always a student");
  },
};

// 
person.firstName = "Naive";

//dot notation
console.log(person.firstName);

//bracket notation
console.log(person["behaviour"]);

const originalVariable = 10;

const duplicateVariable = originalVariable;

console.log(duplicateVariable);
