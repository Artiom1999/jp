const input = document.getElementById("name-input");
const button = document.getElementById("change-name-btn");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  if (!input.value) {
    alert("Iveskite varda!");
    return;
  }

  // Sukuriame h1 tag'a
  const heading = document.createElement("h1");
  // Noriu kad h1 tag'o tekstas butu inputo reiksme
  heading.textContent = input.value;
  // Noriu kad mano div'as turetu viduje sita heading
  output.append(heading);
});
