const button = document.querySelector("#btn");

function increseCount() {
  let x = 0;
  button.onclick = () => {
    console.log("hello", x++);
  };
}

increseCount();
