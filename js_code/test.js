const numbers = [2, 3, 4, 5, 6, 7, 8];

const tripleEven = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      const evenNumber = arr[i] * 3;
      count += evenNumber;
    }
  }
  return console.log(count);
};

tripleEven(numbers);

const arr = [1, 2, 3, 4, 5];

const total = arr.map((item) => item + 1);

const even = total.filter((item) => item % 2 == 0);

console.log(even);
