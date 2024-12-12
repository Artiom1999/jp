//Užduotys (1/2)
// 23. Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus.
// Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą.
// Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis.
// Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą.
// Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
// Funkcija, kuri priima skaičių masyvą ir grąžina jų sumą

function sumaMasyve(skaiciai) {
  let suma = 0;
  for (let i = 0; i < skaiciai.length; i++) {
    suma += skaiciai[i];
  }
  return suma;
}

let masyvas1 = [5, 10, 15];
let masyvas2 = [3, 7, 12];

let suma1 = sumaMasyve(masyvas1);
let suma2 = sumaMasyve(masyvas2);

console.log("Pirmo masyvo suma:", suma1);
console.log("Antro masyvo suma:", suma2);

if (suma1 > suma2) {
  console.log("Pirmo masyvo suma yra didesnė.");
} else if (suma1 < suma2) {
  console.log("Antro masyvo suma yra didesnė.");
} else {
  console.log("Abi sumos yra lygios.");
}

// arba

// 24. Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą.
// Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą.
// Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.
// Funkcija, kuri priima žodžių masyvą ir grąžina ilgiausią žodį

function ilgiausiasZodis(zodziai) {
  let ilgiausias = zodziai[0];
  for (let i = 1; i < zodziai.length; i++) {
    if (zodziai[i].length > ilgiausias.length) {
      ilgiausias = zodziai[i];
    }
  }
  return ilgiausias;
}

let zodziai = ["obuolys", "bananas", "braškė", "vanduo", "moliūgas"];

let ilgiausias = ilgiausiasZodis(zodziai);

console.log("Ilgiausias žodis:", ilgiausias);
console.log("Jo ilgis:", ilgiausias.length);

// arba

// 25. Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą.
// Ji turėtų patikrinti ar visi pažymiai teigiami:
// jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false.
// Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus.
// Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami',
// jei false - 'studentas turi bent vieną neigiamą pažymį').
// Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją,
// jai perduoti kitos funkcijos atsakymą.

function visiTeigiami(pazymiai) {
  for (let pazymys of pazymiai) {
    if (pazymys < 0) {
      return false;
    }
  }
  return true;
}

function konvertuotiIKonteksta(atsakymas) {
  if (atsakymas) {
    return "visi studento pažymiai teigiami";
  } else {
    return "studentas turi bent vieną neigiamą pažymį";
  }
}

let pazymiai1 = [8, 9, -10, 7];
let pazymiai2 = [8, -3, 10, 7];

let atsakymas1 = visiTeigiami(pazymiai1);
let atsakymas2 = visiTeigiami(pazymiai2);

console.log(konvertuotiIKonteksta(atsakymas1));
console.log(konvertuotiIKonteksta(atsakymas2));

// arba
