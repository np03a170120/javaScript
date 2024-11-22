const a = [];

function countTrue(arr) {
  if (arr.length > 0) {
    const count = arr.filter((item) => item == true).length;
    return count;
  }
  return 0;
}

console.log(countTrue(a));
