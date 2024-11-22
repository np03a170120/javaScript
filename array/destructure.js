let a = [1, 2, 3, 4, 5, 6, 7, 8];

const [x, y, ...rest] = a;

let b = { name: "season", age: 52 };

const { age } = b;

const addNum = [1, 3, 4, 5];

// console.log(...addNum);

// console.log(Math.max(...addNum));

const person = {
  name: "season",
  age: 12,
  college: "Herald College",
  address: { street: "Manahorabasti", city: "kathmandu" },
};

const {
  address: { street },
} = person;

console.log(street);

const updatedPerson = {
  ...person,
  address: {
    ...person.address,
    street: "sahar",
  },
};

console.log(person.address === updatedPerson.address);

const user = { id: 0, username: "SEASON" };

function haveFun({ username }) {
  console.log(username);
}

haveFun(user);
