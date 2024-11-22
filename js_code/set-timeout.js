function a() {
  for (let x = 0; x < 5; x++) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
}
// a();

var x = 2;
var y = x--;
console.log(y);
