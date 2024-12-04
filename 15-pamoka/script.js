// pvz1

const bmw = {
  modelis: '530',
  kuroTypas: 'Dyzelinas',
  variklioTuris: 3.0,
  spalva: 'melyna',
  arNaudotas: true,
  pravardes: ['Peleda', 'Ryklys', 'Penktukas'],
  sukurejas: {
    vardas: 'Bambalis',
    pavarde: 'Bambalinis',
  },
  rida: null,
};

const audi = {
  modelis: 'a4',
  kuroTypas: 'Dyzelinas',
  variklioTuris: 1.9,
  spalva: 'geltona',
  arNaudotas: true,
  pravardes: null,
  sukurejas: {
    vardas: 'Audrius',
    pavarde: 'Audinius',
  },
  rida: 150000,
};

const vokiskiAutomobiliai = [bmw, audi];

console.log(vokiskiAutomobiliai);

// pvz

const book1 = {
  title: 'Nuotykiai prie juros',
  author: 'Thomas Thomason',
  genre: 'adventure',
  price: 15.99,
  pages: 2500,
  chapters: ['Izanga', 'Pradzia', 'Paslaptis', 'Pabaiga'],
  year: 2010,
  available: false,
};

const book2 = {
  title: 'Nuotykiai prie dykumos',
  author: 'Thomas Thomasonas',
  genre: 'action',
  price: 35.99,
  pages: 1500,
  chapters: ['Izanga', 'Pradzia', 'Paslaptis', 'Pabaiga', 'The end'],
  year: 2020,
  available: true,
};

if (book1.pages < book2.pages) {
  console.log(
    `Plonesnė knyga "${book1.title}" ji turi ${book1.pages} puslapiu.`
  );
} else if (book1.pages > book2.pages) {
  console.log(
    `Plonesnė knyga "${book2.title}" ji turi ${book2.pages} puslapiu.`
  );
} else {
  console.log('Abi knygos turi vienoda puslapiu kieki');
}

if (book1.chapters.length > book2.chapters.length) {
  console.log(`Daugiau skyriu turi "${book1.title}".`);
} else if (book1.chapters.length < book2.chapters.length) {
  console.log(`Daugiau skyriu turi "${book2.title}".`);
} else {
  console.log('Abi knygos turi vienoda skyriu kieki');
}

const pigesneKnyga = book1.price < book2.price ? book1 : book2;
const brangesneKnyga = book1.price > book2.price ? book1 : book2;

const dvigubaKaina = pigesneKnyga.price * 2;

if (dvigubaKaina > brangesneKnyga.price) {
  console.log(`${brangesneKnyga.title}`);
} else {
  console.log(
    `Net padvigubinus kaina, visvien "${brangesneKnyga.title}" yra brangesne`
  );
}

// pvz4

// let pigesneKnyga;
// let brangesneKnyga;

// if (book1.price < book2.price) {
//   pigesneKnyga = book1;
//   brangesneKnyga = book2;
// } else {
//   pigesneKnyga = book2;
//   brangesneKnyga = book1;
// }

// 4.uzduotys

// Sukurkite tris ojektus prekiu duomenims saugoti. Kiekviename objekte sudekite sias savybes
// su reiksmemis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandelyje, siuntimui dezes matmenys
// (x,y,z asys).Isveskite visu triju prekiu informacija. Iveskite visu prekiu kainas vienoje eilute
// (pirma preke kainuoja- ...,antra preke kainuoja - ...., ir t.t.). Raskite ir isveskite  kuri preke yra
// brangiausia (jos pavadinima ir kaina arba visa rastos prekes informacija.) Raskite ir isveskite atskirose
// eilutese kiekvienos prekes dezes turi. Raskite ir isveskite atskirose eilutese kiekvienos prekes dezes turi.
// Raskite ir isveskite atskirose eilutese kiekvienos prekes pelninguma((kaina - savikaina)* kiekis sandelyje)

const objektas1 = {
  pavadinimas: 'Nuotykiai',
  kaina: 19.99,
  savikaina: 10.0,
  kodas: 404,
  turimasKiekisSandelyje: 100,
  siuntimuiDezesMatmenys: [20, 20, 20],
};
const objektas2 = {
  pavadinimas: 'Fantastika',
  kaina: 29.99,
  savikaina: 15.0,
  kodas: 704,
  turimasKiekisSandelyje: 100,
  siuntimuiDezesMatmenys: [25, 30, 20],
};
const objektas3 = {
  pavadinimas: 'Drama',
  kaina: 49.99,
  savikaina: 19.0,
  kodas: 504,
  turimasKiekisSandelyje: 100,
  siuntimuiDezesMatmenys: [20, 20, 20],
};

console.log(objektas1, objektas2, objektas3);
console.log(
  `Pirma knyga kainuoja ${objektas1.kaina} euru, Antra knyga kainuoja ${objektas2.kaina} euru, Trecia knyga kainuoja ${objektas3.kaina} euru`
);

let pigesneKnyga1;
let brangesneKnyga1;

if (objektas1.kaina < objektas2.kaina) {
  pigesneKnyga1 = objektas1;
  brangesneKnyga1 = objektas2;
} else {
  pigesneKnyga = objektas2;
  brangesneKnyga = objektas1;
}

// 5. Sukurkite objekta automobilio duomenims saugoti.I si objekta savybes su reiksmemis sukelkite, po to
// kai sukursite tuscia objekta(10-as pavyzdys).Sudekite sias savybes su reiksmemis: marke, modelis, rida ,
// gamybos metai, spalva, dabarbinis turis, ar dauzta, ar parduodama. Isveskite visa automobilio informacija
// Paskaiciuokite ir isveskite kiek automobiliui yra metu(rankomis irasykite dabartinius metus arba panaudokite
// Date(Date.now()).getFullYear()funkcija).Paskaiciuokite ir isveskite kiek vidutiniskai per metus yra nuvaziaves
// automobilis(jaigu viso nuvaziavo 300 kilometru,o automobiliui yra 2metai,
// tai per metus vidutiniskai gaunasi 150km)

const automobilis = {};

automobilis.marke = 'Toyota';
automobilis.modelis = 'Prius';
automobilis.rida = 145795;
automobilis.spalva = 'Raudona';
automobilis.darbinisTuris = 1.9;
automobilis.gamybosMetai = 2015;
automobilis.arDauztas = false;
automobilis.arParduodamas = true;

const dabartiniaiMetai = new Date(Date.now()).getFullYear();
const autoAmzius = dabartiniaiMetai - automobilis.gamybosMetai;
console.log(`Autmobilio amžius: ${autoAmzius} metai`);

const vidutineRidaPerMetus = automobilis.rida / autoAmzius;

console.log(vidutineRidaPerMetus.toFixed(2));

const zmogus = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

for (const pazymys of zmogus.pazymiai) {
  console.log(pazymys);
}

const zmogus1 = {
  asdasdad: 'Vardenis',
  pavarde: 'Pavardenis',
  amzius: 18,
  pazymiai: [5, 6, 8, 9],
};

let suma = 0;

for (const pazymys of zmogus1.pazymiai) {
  suma += pazymys;
}

console.log(suma);

let studentas = {
  vardas: 'Tomas',
  pavarde: 'Tomasas',
};

// Gauti kiekviena reiksme
for (const index in studentas) {
  console.log(studentas[index]);
}

// Artiom