function solution(str) {
  const arr = str.split("");
  let output = "";
  const first_letter = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== first_letter && arr[i] === arr[i].toUpperCase()) {
      output = output + " " + arr[i];
    } else {
      output += arr[i];
    }
  }

  return output;
}

solution("weAreCamel");
