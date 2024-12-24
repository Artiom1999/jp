// const input = document.getElementById("name-input");
// const surnameInput = document.getElementById("surname-input");
// const button = document.getElementById("change-name-btn");
// const age = document.getElementById("age");
// const output = document.getElementById("output");

// button.addEventListener("click", function () {
//   if (!input.value || !surnameInput.value || !age.value) {
//     alert("Iveskite varda, gimimo metus ir megstama spalva!");
//     return;
//   }

//   // Sukuriame h1 tag'a
//   const divContainer = document.createElement("div");
//   divContainer.style.border = "1px solid black";
//   divContainer.style.borderRadius = "10px";
//   divContainer.style.margin = "10px 0";
//   divContainer.style.padding = "10px";
//   // Noriu kad h1 tag'o tekstas butu inputo reiksme
//   divContainer.innerHTML = `<p><strong>Vardas:${input.value}</strong></p><p>Spalva:${surnameInput.value} </p><p>Metai:${age.value}</p>`;
//   // Noriu kad mano div'as turetu
//   output.append(divContainer);
// });

// Išsivedu (gaunu DOM) visus elementus pagal jų Id
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const colorInput = document.getElementById("color-input");
const button = document.getElementById("change-name-btn");
const output = document.getElementById("output");

// Mygtuko paspaudimas, patikrinam ar įvesta reikšmė
button.addEventListener("click", function () {
  // Tikriname, ar visi laukai užpildyti
  if (!nameInput.value || !colorInput.value || !ageInput.value) {
    alert("Įveskite vardą, amžių ir mėgstamą spalvą!");
    return;
  }
  // Sukuriame Div elementą
  const divContainer = document.createElement("div");

  // į Div
  divContainer.style.border = "1px solid black";
  divContainer.style.borderRadius = "10px";
  divContainer.style.margin = "10px 0";
  divContainer.style.padding = "10px";
  // Nustatome h1 tag'o tekstą iš įvesties reikšmių
  divContainer.innerHTML = `<p><strong>Vardas:</strong> ${nameInput.value}</p> <p><strong>Spalva:</strong> ${colorInput.value}</p><p><strong>Amžius:</strong> ${ageInput.value}</p>`;
  // Pridedame sukurtą h1 prie output div
  output.append(divContainer);
});
function deleteEntry() {
  // ištrina suvestą informacijos reikšmes!
  // Ištrina suvestą informaciją – per nustatytas getElementById funkcijas
  // išvalomos formos reikšmės (pvz., name-input, age-input, color-input).
  document.getElementById("name-input").value = "";
  document.getElementById("age-input").value = "";
  document.getElementById("color-input").value = "";
  // Ištrina tą info, kuri buvo suvesta
  // Ištrina tą informaciją, kuri buvo įvesta – tai išvalo rodomą informaciją, nustačius innerHTML į tuščią reikšmę.
  document.getElementById("output").innerHTML = "";
  // IŠtrina/paslepia surinktą info iš rodymo t.y. output
  // // Ištrina arba paslepia surinktą informaciją iš rodymo – naudojant style.display = 'none', paslėpiamas elementas su id result.
  document.getElementById("result").style.display = "none";
}
