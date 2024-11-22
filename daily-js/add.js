function add(n) {
  return function (m) {
    return n + m;
  };
}

console.log(add(2)(3));
