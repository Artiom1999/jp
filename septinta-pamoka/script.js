// Uzduoys kepykla

let darboValandos = 8;

let iskepaKepaluPerValandaVienasDarbuotojas = 5;
let dabuotojuSkaicius = 6;
let vienoKepaloSavikaina = 2;
let vienoKepaloPardavimoKaina = 4;
let dienosUzsakymas = 60;

// Darbuotojai iskepa kepalu per diena
let iskepaKepaluPerDiena =
  iskepaKepaluPerValandaVienasDarbuotojas * dabuotojuSkaicius * darboValandos;

// Savikaina visu iskeptu kepalu per visa diena.
let visuKepaluSavikaina = vienoKepaloSavikaina * iskepaKepaluPerDiena;

// Pajamos pardavus visus kepalus per diena.
let pajamosPardavusKepalus = vienoKepaloPardavimoKaina * iskepaKepaluPerDiena;

// Gautas pelnas is parduotu kepalu per visa diena.
let gautasPelnas = pajamosPardavusKepalus - visuKepaluSavikaina;

// uzsakymo pajamos, savikaina ,pelanas.
let uzsakymoPajamos = dienosUzsakymas * vienoKepaloPardavimoKaina;
let uzsakymoSavikaina = dienosUzsakymas * vienoKepaloSavikaina;
let uzsakymoPelnas = uzsakymoPajamos - uzsakymoSavikaina;

// 1.
console.log(
  `Per viena darbo diena kepykla iskeps: ${iskepaKepaluPerDiena} kepalu`
);

// 2.
console.log(`Per diena iskeptu kepalu savikaina: ${visuKepaluSavikaina} euru`);
console.log(`Per diena gaunamos pajamos: ${pajamosPardavusKepalus} euru`);
console.log(`Per diena gautas pelanas: ${gautasPelnas} euru`);

// 3.

if (iskepaKepaluPerDiena > dienosUzsakymas) {
  console.log('kepykla spes iskepti: 60 kepalu');
}

// 4.

console.log(`Uzsakymo pajamos butu: ${uzsakymoPajamos} euru`);
console.log(`Uzsakymo pelnas butu: ${uzsakymoPelnas} euru`);

// utvirtinimo-uzdaviniai-10.js

// 1.Užduotis: Kurjerio pristatymo patikrinimas

let uzsakymoLaikas = 15;

if (uzsakymoLaikas > 16) {
  console.log('preke yra sandelyje');
} else {
  console.log('prekes nera sandelyje');
}

// 2. Užduotis: Amžiaus kategorijos nustatymas
