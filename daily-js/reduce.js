const arr = [2, 3, 4, 5, 1, -9];

const output = arr.reduce((accu, current) => {
  if (current > accu) {
    accu = current;
  }
  return accu;
}, 0);

// console.log(output);

const users = [
  { firstName: "season", lastName: "shrestha", age: 12 },
  { firstName: "nischal", lastName: "pradhan", age: 24 },
  { firstName: "bir", lastName: "manandhar", age: 24 },
];

const new_arr = users.map((item) => {
  return `${item.firstName} ${item.lastName}`;
});

const age_count = users.reduce((accu, current) => {
  return {};
});

console.log(new_arr);
