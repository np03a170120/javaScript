const eye = document.querySelector("#eye");
const eyeBall = document.querySelector("#eyeBall");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerWidth + "%";

  eyeBall.style.transition = "0s";
  eyeBall.style.left = x;
  eyeBall.style.top = y;
};

document.onmouseout = () => {
  eyeBall.style.transition = "0.7s";
  eyeBall.style.left = "50%";
  eyeBall.style.top = "50%";
};
