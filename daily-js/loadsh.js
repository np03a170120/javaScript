function compact(arr) {
  const output = arr.filter((item) => {
    if (item !== 0 || item === false || !isNaN(item)) {
      return item;
    }
  });
  return output;
}

const arr = [0, 1, false, 2, "", 3];

console.log(compact(arr));
