function sumInput() {
  let input = 0;
  let count = 0;
  const output = [];

  do {
    input = parseInt(prompt("Enter the number"));
    output.push(input);
  } while (!isNaN(input));

  output.filter((item) => {
    if (!isNaN(item)) {
      count += item;
    }
  });
  console.log(count);
}

sumInput();
