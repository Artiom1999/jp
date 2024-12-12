const input = document.getElementById("name-input");
const button = document.getElementById("change-name-btn");
const greeting = document.getElementById("greeting");
const errorMessage = document.getElementById("error-message");

button.addEventListener("click", function () {
  // Gauname ivesta reiksme kaip string
  const inputValue = input.value;

  if (inputValue !== "") {
    greeting.textContent = `Sveiki, ${inputValue}!`;
    errorMessage.style.display = "none";
  } else {
    errorMessage.textContent = "Iveskite savo Varda!";
    errorMessage.style.display = "block";
  }
});
