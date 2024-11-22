function concat(...args) {
  const output = args.flat(Infinity);
  return output;
}

console.log(concat([0, 1, [2, [3, [4, 5]]]]));
