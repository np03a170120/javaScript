const arr = [1, 2, 3, 4, 5];
const newArr = new Array();

arr[4] = "integrated";

// console.log(arr[arr.length - 1]);

// console.log(arr.at(-1));

//array as que
const que = [];

que.push(2);
que.push(3);

que.shift();

// console.log(que);

//array as stack

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

// console.log(stack);

let a = ["banana"];
a.push("strawberry");
let x = a;
// console.log(a);
// console.log(x);

//count length

let z = [];
z[90] = "hello";

// console.log(z.length);

//weird

const y = [2, 3, 4, 5, 6];
y.length = 9;

// console.log(y);

//matrix

let p = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
];

// console.log(p[2][1]);

// console.log([] == []);

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
// console.log(styles);
