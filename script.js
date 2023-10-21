// Accordian
const accordion__icon__1 = document.querySelectorAll(".accordion__icon__1");
const accordion__icon__2 = document.querySelectorAll(".accordion__icon__2");
const accordion__body = document.querySelectorAll(".accordion__body");
const accordion__btn = document.querySelectorAll(".accordion__btn");

accordion__btn.forEach((button, i) => {
  button.addEventListener("click", () => {
    accordion__body[i].classList.toggle("d-none");
    accordion__icon__1[i].classList.toggle("d-none");
    accordion__icon__2[i].classList.toggle("d-none");
    for (let j = 0; j < accordion__btn.length; j++) {
      if (i != j) {
        accordion__body[j].classList.add("d-none");
        accordion__icon__1[j].classList.remove("d-none");
        accordion__icon__2[j].classList.add("d-none");
      }
    }
  });
});
