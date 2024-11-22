const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const toggle_btn = question.querySelector(".question-btn");
  toggle_btn.addEventListener("click", function () {
    question.classList.toggle("show-text");

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});
