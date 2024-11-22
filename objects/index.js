const obj = new Object({
  name: "season",
  lastName: "shrestha",
  act: function () {
    console.log("hello");
  },
  "we good": "yeah!",
});
obj["man"] = "this is new";

for (key in obj) {
  //   console.log(key);
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

// console.log(codes);
// let x = prompt("enter the name");

// const okay = {
//   [x]: 6,
// };

// console.log(okay);

let schedule = {};

function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumProp(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

// console.log(menu);

let user = {
  name: "John",
  age: 30,
};

let duplicate_user = {};

// for (key in user) {
//   duplicate_user[key] = user[key];
// }

let extra1 = { ego: "prove them wrong" };

Object.assign(duplicate_user, user, extra1);

let test = Object.assign({}, duplicate_user);

// console.log(test);

let user_original = {
  name: "season",
  sizes: {
    height: 120,
    width: 120,
  },
};

// let duplicate_original = Object.assign({}, user_original);
let strct_clone = structuredClone(user_original);
user_original.sizes.height = 900;

// console.log(strct_clone);
// console.log(user_original);

const x = 10;
const y = structuredClone(x);

console.log(y);

const user_destructure = {
  id: 1,
  username: "johndoe destructure",
  email: "johndoe@example.com",
};

const { username, email } = user_destructure;

// console.log(username);

const calculator = {
  add: function () {
    return a + b;
  },
};

console.log(Object.keys(user_destructure, "value"));
