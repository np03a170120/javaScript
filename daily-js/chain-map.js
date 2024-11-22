const users = [
  { firstName: "Season", lastName: "Shrestha", age: 34 },
  { firstName: "Naive", lastName: "Pradhan", age: 65 },
  { firstName: "Jona", lastName: "Laren", age: 34 },
];

const output = users.reduce((accu, curr) => {
  if (accu[curr.age]) {
    accu[curr.age] = ++accu[curr.age];
  } else {
    accu[curr.age] = 1;
  }
  return accu;
}, {});

console.log(output);
