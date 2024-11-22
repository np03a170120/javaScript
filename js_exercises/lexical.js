function a() {
  var x = 10;

  function b() {
    return x;
  }
  b();
}

a();

// function transform(numbers, transFunc) {
//   var output = [];
//   for (let i = 0; i < numbers.length; i++) {
//     output.push(transFunc(numbers[i]));
//   }
//   return output;
// }

// var numbers = [1, 2, 3, 4, 5];

// var result = transform(numbers, function (x) {
//   return x * x;
// });

// console.log(result);
