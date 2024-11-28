function front3(str) {
  const split_str = str.substring(0, 3);
  let output = "";

  for (let i = 0; i < 3; i++) {
    output += split_str;
  }

  return output;
}

console.log(front3("Java"));
