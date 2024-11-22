const arr = [2, 3, 4, 5, 6];

function add(num) {
  return num + num;
}

function area(num) {
  return 2 * (22 / 7) * num;
}

function calcualate(arr, func) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(func(arr[i]));
  }
  return output;
}

console.log(calcualate(arr, add));
console.log(calcualate(arr, area));
