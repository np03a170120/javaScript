function openOrSenior(data) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  }
  return output;
}

const people_data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
console.log(openOrSenior(people_data));
