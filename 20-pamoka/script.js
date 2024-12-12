// DOM - reprezentuoja HTML dokumenta kaip objektu medi.

// HTML seletoriai

// 1. Pagal elemento ID
const element = document.getElementById("unikalusId");

// 2. Pagal elemento klase
const elementsByClassName =
  document.getElementsByClassName("klasesPavadinimas");

// 3. Pagal visus tam tikro tipo elementus
// pvz p, h1, div, span, a, section.. ir t.t.
const elementsByTagName = document.getElementsByTagName("p");

// 4. Pirmo elemento pasirinkimas
const firstElement = document.querySelector(".klasesPavadinimas");

// 5. Visu elementu pasirinkimas pagal selektoriu
const allElements = document.querySelectorAll(".klasesPavadinimas");

// PVZ:
// Vieno elemento radimas kito elemento viduje.
const container = document.querySelector(".klasesPavadinimas");
container.querySelector("span");

// Modifikavimas

// 1.Elemento HTML turinio keitimas
element.innerHTML = "<p>Sveiki</p>";

// 2.Elemento teksto keitimas
element.textContent = "Sveiki";

// 3.Elemento klases pridejimas
element.classList.add("naujaKlase");

// Pkeisti stiliu
element.style.color = "red";

// Padaryk kazka kiekvienam elementui is masyvo;
// Sugalvok pavadinima ir nurodyk kaip argumenta
// Viduje funkcijos atliekam norimus veiksmus su butent tuo elementu
allElements.forEach((element) => {
  element.style.color = "red";
});
