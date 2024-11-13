// Uzduoys kepykla

let darboValandos = 8;

let iskepaKepaluPerValandaVienasDarbuotojas = 5;
let dabuotojuSkaicius = 6;
let vienoKepaloSavikaina = 2;
let vienoKepaloPardavimoKaina = 4;
let dienosUzsakymas = 60;

let iskepaKepaluPerDiena =
  iskepaKepaluPerValandaVienasDarbuotojas * dabuotojuSkaicius * darboValandos;

let visuKepaluSavikaina = vienoKepaloSavikaina * iskepaKepaluPerDiena;

let pajamosPardavusKepalus = vienoKepaloPardavimoKaina * iskepaKepaluPerDiena;

let gautasPelnas = pajamosPardavusKepalus - visuKepaluSavikaina;

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

let uzsakymoLaikas = 0 > 15;

// 2. Užduotis: Amžiaus kategorijos nustatymas
