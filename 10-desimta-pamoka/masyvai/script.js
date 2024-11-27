// Masyvus galima įsivaizduoti kaip:
// ○ Masyvas yra specialaus tipo kintamasis, kuris gali saugoti daugiau nei vieną reikšmę.
// ○ Masyvas apjungia kelis skirtingus kintamuosius į vieną vietą.
// ○ Masyvas padeda sugrupuoti susijusius duomenis.

// pvz 1
const vokiskiautomobiliai = ['Audi', 'BMW', 'Mercedes'];

console.log(vokiskiautomobiliai);

// pvz 2

const matematika = 10;
const lietuviu = 9;
const anglu = 8;

const pazymiai = [matematika, lietuviu, anglu];

console.log(pazymiai[1]);

// pvz 3

let suma = 0;
let masyvas = [3, 1, 2];

suma = masyvas[0] + masyvas[1] + masyvas[2];

console.log(suma);

// pvz 4

let skaiciai = [1, 2, 3, 4, , 5];

console.log(skaiciai.length);

// 5

let automobiliai = [];

if (automobiliai.length) {
  console.log('Masyvas netuscias');
}

if (automobiliai.length === 1) {
  console.log('Masyve yra vienas elementas', automobiliai[0]);
}

// Push metodas

let pienoProduktai = ['pienas', 'kefyras', 'grietine'];

pienoProduktai.push('jogurtas');

console.log(pienoProduktai);

// push 2 metodas

let naujasProduktas = 'grybai';
let pienoProduktai2 = ['pienas'];
let kitiProduktai = [];

if (naujasProduktas === 'kefyras') {
  pienoProduktai2.push(naujasProduktas);
} else {
  kitiProduktai.push(naujasProduktas);
}

console.log(pienoProduktai2);
console.log(kitiProduktai);

// pvz 7

let masivoSkaiciai = ['pirmas', 'antras', 'trecias', 'ketvirtas'];

// Pirma nary
console.log(masivoSkaiciai[0]);
// Paskutinis
console.log(masivoSkaiciai[masivoSkaiciai.length - 1]);

// pvz 8

let vardai = ['Tomas', 'Agne', 'Greta'];

console.log(vardai);

vardai[0] = 'Greta';
vardai[2] = 'Tomas';

console.log(vardai);

// pvz nuo Gretos

let masyvass = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let vidurinysis = Math.floor(masyvass.length / 2);

let vidurinysis1 = masyvass[vidurinysis - 1];
let vidurinysis2 = masyvass[vidurinysis];

console.log(
  `Pasirinkti nariai iš masyvo vidurio: ${vidurinysis1}, ${vidurinysis2}`
);
