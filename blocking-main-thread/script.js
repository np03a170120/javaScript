console.log("start");

setTimeout(() => {
  console.log("clg from setTimeout");
}, 5000);

let start = new Date().getTime();
let end = start;

while (end < start + 10000) {
  end = new Date().getTime();
}
