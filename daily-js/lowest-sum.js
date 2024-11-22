const numbers = [10, 343445353, 3453445, 3453545353453];

function sumTwoSmallestNumbers(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const lowest_sum = arr[0] + arr[1];
  return lowest_sum;
}

console.log(sumTwoSmallestNumbers(numbers));
