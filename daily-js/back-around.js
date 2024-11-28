function backAround(str) {
  const last_char = str.slice(-1);
  return `${last_char}${str}${last_char}`;
}

console.log(backAround("cat"));
