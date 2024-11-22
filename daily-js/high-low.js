function highAndLow(numbers) {
  const normalize = numbers.split(" ").map((item) => parseInt(item));

  const highest = normalize.reduce((accu, curr) => {
    if (accu < curr) {
      accu = curr;
    }
    return accu;
  });

  const lowest = normalize.reduce((accu, curr) => {
    if (curr < accu) {
      accu = curr;
    }
    return accu;
  }, Infinity);

  return `${highest} ${lowest}`;
}

console.log(highAndLow("0 -1"));

// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
