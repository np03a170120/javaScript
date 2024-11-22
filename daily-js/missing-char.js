function findMissingLetter(arr) {
  const chars = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    chars.push(char.charCodeAt());
  }

  const start = chars[0];
  const end = chars[chars.length - 1];
  const arr_num = [];

  for (let i = start; i < end + 1; i++) {
    arr_num.push(i);
  }

  const missing_number = arr_num.filter((item) => !chars.includes(item));

  return `${String.fromCharCode(missing_number)}`;
}

const test_arr = ["A", "B", "C", "D", "E", "G"];

console.log(findMissingLetter(test_arr));
