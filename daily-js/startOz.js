function startOz(str) {
  const split_str = str.split("");
  if (split_str[0] === "o" && split_str[1] === "z") {
    return `${split_str[0]}${split_str[1]}`;
  } else if (split_str[0] === "o") {
    return split_str[0];
  } else if (split_str[1] == "z") {
    return split_str[1];
  } else {
    return "";
  }
}

console.log(startOz("oxx"));
