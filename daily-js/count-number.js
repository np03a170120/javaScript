function num_of_digits(a) {
  const x = String(a).split("");
  const filter = x.filter((item) => item >= 0 && !isNaN(item));
  return filter.length;
}

console.log(num_of_digits(-12381428));
