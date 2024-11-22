function add_suffix(suffix) {
  return function (word) {
    return word + suffix;
  };
}

console.log(add_suffix("ly")("loving"));
