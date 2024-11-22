function toArray(obj) {
  const arr = Object.entries(obj);
  return arr;
}

console.log(toArray({ a: 1, b: 2 }));
