// Objects (Objektai)
// Objektas paprastai naudojamas kai norime sugrupuoti duomenis apie
// vieną esybę, pavyzdžiui, vieno studento duomenys, vienos knygos
// duomenys ir pan.

const objektas = {
  key: 'value',
  raktas: 'reiksme',
  kuro_typas: 'benzinas',
};

// Pvz knygos duomenys

const knyga = {
  pavadinimas: 'Nuotykiai',
  autorius: 'Jonas Jonaitis',
  isbn_kodas: '978-10',
  puslapiai: 250,
  temos: ['fantastika', 'nuotykiai'],
  leidimas: {
    metai: 2022,
    leidykla: 'Liksmos knygos',
    vertejas: 'Petras Petraitis',
    adresas: 'Vilniaus g. 10',
  },
  kaina: 19.99,
  valiuta: 'EUR',
  arTurime: true,
  arNaudota: false,
};

// Objekto duomenis galime pasiekt naudojant taska ir objekto rakta
console.log(knyga.autorius);
// nuotykiai
console.log(knyga.temos[1]);
// metai
console.log(knyga.leidimas.metai);

// Pvz 2

let darbuotojas = {
  pareigos: 'Programuotojas',
  lygis: 'Jaunesnysis',
  atlyginimas: 1000,
  isidarbino: 2022,
};

let dabartiniaiMetai = 2024;
let jauDirba = dabartiniaiMetai - darbuotojas.isidarbino;

switch (jauDirba) {
  case 1:
    darbuotojas.atlyginimas += 100;
    break;
  case 2:
    darbuotojas.atlyginimas += 200;
    break;
  case 3:
    darbuotojas.atlyginimas += 300;
    break;
  case 4:
    darbuotojas.atlyginimas += 400;
    break;
}

console.log(darbuotojas.atlyginimas);

// Pvz 4

let darbuotojas4 = {};

darbuotojas4.pareigos = 'programuotojas';

console.log(darbuotojas4);

// Uzduotis

const studentas = {
  vardas: 'Antanas',
  pavarde: 'Petraitis',
  amzius: '18-metu',
  studiju_programa: 'javascript',
  asiskaitymo_kredito_skaicius: 2,
  pazymiai: {
    matematika: 2,
    lietuviu: 3,
    fizika: 2,
    daile: 10,
  },
  ugis: 176,
  kelintame_kurse_mokosi: 1,
  kurioje_mokykloje_mokosi: 'Lentvario gimnazijoje',
};

console.log(studentas);

// istraukti metus

const dabartiniaiMetai1 = new Date(Date.now()).getFullYear();

// 2

const filmas = {
  pavadinima: 'Titanikas',
  reziserius: 'Jamsas Camerunas',
  biudzetas: 3000,
  uzdirbtiPinigai: 4000,
  trukme: [3, 'valandos'],
  isleidimoMetai: 1990,
  zanras: 'Drama',
  aktoriuSarasas: ['Dikaprio', 'Andzolina Dzoli', 'Jony DEppas', 'Travolto'],
};
const dabartiniaiMetai2 = new Date(Date.now()).getFullYear();
kiekmetuFilmui = dabartiniaiMetai - filmas.isleidimoMetai;
let pelnas = filmas.uzdirbtiPinigai - filmas.biudzetas;

console.log(filmas);
console.log(pelnas, 'euru filmo pelnas');
console.log(filmas.aktoriuSarasas.length, 'aktoriai dalivauja filme');
console.log(kiekmetuFilmui, 'metai yra dabar filmui');

// 3

const knyga1 = {
  pavadinimas: 'Alisa stebuklu Sali',
  autorius: 'Petras Petraitis',
  zanras: 'Siaubo',
  kaina: [20.0, 'euru'],
  puslapiai: 300,
  skyriuSarasas: ['1skyrius', '2skyrius', ''],
};
const knyga2 = {
  pavadinimas: 'KOSMOSAS',
  autorius: 'Jonas Jonaitis',
  zanras: 'Fantastika',
  kaina: [7.0, 'euru'],
  puslapiai: 250,
  temos: ['fantastika', 'nuotykiai'],
  leidimas: {
    metai: 2022,
    leidykla: 'Liksmos knygos',
    vertejas: 'Petras Petraitis',
    adresas: 'Vilniaus g. 10',
  },
  kaina: 19.99,
  valiuta: 'EUR',
  arTurime: true,
  arNaudota: false,
};
