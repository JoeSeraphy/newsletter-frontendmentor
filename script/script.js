const form = document.querySelector(".form");
const labelEmail = document.querySelector("#labelEmail");
const emailInput = document.querySelector("#email");
const modal = document.querySelector(".modalWrapper");
const container = document.querySelector(".container");
const closedModalBtn = document.querySelector("#btn");
const errorMessage = document.querySelector(".error");

closedModalBtn.addEventListener("click", () => {
  modal.classList.remove("modalOn");
  container.classList.remove("modalOn");
  form.reset();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const isValid = checkInputEmail(email);

  if (isValid) {
    emailInput.style.border = "1px solid #F44336";
    emailInput.style.backgroundColor = "rgba(244,67,54, 0.2)";
    emailInput.style.color = "#F44336";
    errorMessage.textContent = "valid email required";
  } else if (email === "") {
    emailInput.style.border = "1px solid #F44336";
    emailInput.style.backgroundColor = "rgba(244,67,54, 0.2)";
    emailInput.style.color = "#F44336";
    errorMessage.textContent = "this field is required";
  } else {
    modal.classList.add("modalOn");
    container.classList.add("modalOn");
  }
});

function checkInputEmail(email) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  return regex.test(email);
}
