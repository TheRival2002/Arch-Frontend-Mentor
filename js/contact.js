// adding labels on invalid submit

const submitBtn = document.querySelector(".form-submit");
const inputs = document.querySelectorAll(".form input");

submitBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      input.parentElement.classList.add("invalid");
    } else {
      input.parentElement.classList.remove("invalid");
    }
  });
});
