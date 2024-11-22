function solution(str) {
  const output = [];
  const split_str = str.split("");

  for (let i = 0; i < split_str.length; i = i + 2) {
    if (split_str[i + 1] === undefined) {
      output.push(split_str[i] + "_");
    } else {
      output.push(split_str[i] + split_str[i + 1]);
    }
  }

  return output;
}

const str_data = "hello";

console.log(solution(str_data));
