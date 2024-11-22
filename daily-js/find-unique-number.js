function findUniq(arr) {
  const set_arr = new Set(arr);
  const [x, y] = [...set_arr];

  const count_x = [];
  const count_y = [];

  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      count_x.push(arr[i]);
    } else if (y === arr[i]) {
      count_y.push(arr[i]);
    }
  }
  if (count_x.length < count_y.length) {
    return parseFloat(count_x);
  } else {
    return parseFloat(count_y);
  }
}

const arr = [1, 1, 1, 1, 1, 1, 1, 0];

console.log(findUniq(arr));

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }
