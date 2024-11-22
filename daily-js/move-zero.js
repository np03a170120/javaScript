function moveZeros(arr) {
  const output = [];
  const new_output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      output.push(arr[i]);
    } else {
      new_output.push(arr[i]);
    }
  }
  return [...new_output, ...output];
}

const test_arr = [1, 3, 1, 1, 2, 1, +0, +0, +0, +0];

console.log(moveZeros(test_arr));
