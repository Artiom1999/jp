// Masyvai

// Pvz 1

const masyvas = [90, 30, 20, 30, 50, 60];

for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}

// Pvz 2

let miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

for (let i = 0; i < miestai.length; i++) {
  console.log('Miestas', miestai[i]);
}

// Pvz 3

let Miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

for (let i = 0; i < Miestai.length; i++) {
  console.log(i + 1 + '-asis miestas ' + Miestai[i]);
}

// Pvz 4

let skaiciai = [9, 8, 6, 3, 5, 2];

let lyginiaiSkaiciai = 0;
let nelyginiaiSkaiciai = 0;

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] % 2 === 0) {
    lyginiaiSkaiciai += skaiciai[i];
  } else {
    nelyginiaiSkaiciai += skaiciai[i];
  }
}

console.log('Visi skaiciai', skaiciai);
console.log('Lyginiai skaiciai', lyginiaiSkaiciai);
console.log('Nelyginiai skaiciai', nelyginiaiSkaiciai);

// Uzduotys

// 6. Susikurti masyva studiju programu pavadinimams saugoti. Uzpildyti si masyva duomenimis.
// Isvesti kiekviena studiju programa atskiroje eiluteje.

let studijos = [`Psichologija`, `Architektura`, `Zurnalistika`];

console.log(studijos[0]);
console.log(studijos[1]);
console.log(studijos[2]);

// bet geriau butu si funkcija>>>>>

const studijuProgramos = ['IT', 'Verslas', 'Teisė'];

for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(studijuProgramos[i]);
}

// 7. Susikurti masyva saliu pavadinimams saugoti ir ji uzpildyti duomenimis.
// Isvesti saliu pavadinimus atskirose eilutese, su prierasu 'salis' ir tada nurodyti sali is masyvo.

let Salis = ['Lietuva', 'Anglija', 'Sveicarija', 'Danija'];

for (let i = 0; i < Salis.length; i++) {
  console.log(i + 1 + '-oji salis ' + Salis[i]);
}

// 8. susikurti masyva igyvendintu projektu pavadinimams saugoti.
// uzpildyti si masyva duomenimis. isvesti kiekviena projekta atskirose eilutese,
// pries kiekviena projekta parasant kelintas tai projektas yra (pradedant 1-uoju).

let igyvendintiProjektai = ['Projekt1', 'Projekt2', 'Projekt3', 'Projekt4'];

for (let i = 0; i < igyvendintiProjektai.length; i++) {
  console.log(i + 1 + '-masis projektas ' + igyvendintiProjektai[i]);
}

// arba kitas buda 8 uzduoties kaip padare Greta

let projektai = [`pirmas`, `antras`, `trecias`];

// console.log(projektai[0] + count);
// console.log(projektai[1] + count);
// console.log(projektai[2] + count);

for (let i = 0; i < projektai.length; i++) {
  console.log(`${i + 1}. ${projektai[i]}`);
}

// 9. Susikurti skaiciu masyva ir uzpildyti duomenimis.
// Is masyvo isvesti tik tuos skaicius, kurie yra didesni nei 5.

let skaiciai9 = [10, 10, 11, 12, 156, 9, 3, 5, 1, 61, 89, 5, 6];
let skaiciusKiekis = skaiciai9.length;

for (let i = 0; i < skaiciusKiekis; i++) {
  let skaiciusMasyve = skaiciai9[i];
  let DidesnisUzPenki = skaiciusMasyve > 5;

  if (DidesnisUzPenki) {
    console.log(skaiciusMasyve);
  }
}

// 10
let skaiciusMasyvas = [];
let sum = 0;

for (i = 0; i < 3; i++) {
  atsitiktiniaiSkaiciai = Math.floor(Math.random() * 100) + 1;
  skaiciusMasyvas.push(atsitiktiniaiSkaiciai);
  if (skaiciusMasyvas[i] % 4 === 0) {
    console.log(skaiciusMasyvas[i]);
  }
  sum += atsitiktiniaiSkaiciai;
}

console.log(skaiciusMasyvas);
console.log(sum);
