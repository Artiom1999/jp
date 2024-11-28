// Uzduotys (1/2)
// 1. Susikurti norima masyva su duomenimis.
// Is masyvo isvesti pirma ir paskutini nari,
// du pasirinktus narius is masyvo vidurio ir kieki kiek siame masyve yra nariu.

let skaiciai = ['pirmas', 'antras', 'trecias', 'ketvirtas'];

console.log('Pirmas narys', skaiciai[0]);
console.log('Paskutinis narys', skaiciai[skaiciai.length - 1]);
console.log('Antras narys', skaiciai[1]);
console.log('Masyvas turi', skaiciai.length, 'narius');

// 2. susikurti norima masyva su duomenim.
// Isvesti viso masyvo info. pakeisti triju pasirinktu nariu reiksmes i kitas. isvesti pakiesto masyvo info.

let automobiliai = ['Audi', 'BMW', 'Mercedes'];

console.log(automobiliai);

automobiliai[0] = 'Opel';
automobiliai[1] = 'Skoda';
automobiliai[2] = 'Subaru';

console.log(automobiliai);

// 3. susikurti tuscia masyvas. uzpildyti si masyva duomenimis naudojant push komanda. Issivesti uzpildyto masyvo informacija.

let produktai = [];

produktai.push('jogurtas', 'pienas', 'kriause', 'bananas');

console.log(produktai);

// 4. susikurti tuscia masyvas. uzpildyti si masyva atsitiktinai sugeneruotais skaiciais. Issivesti uzpildyto masyvo informacija.

// Sis buda nelabai tinkamas
let skaiciai4 = [];

let atsitiktiniaiSkaiciai = [
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
];

skaiciai4.push(atsitiktiniaiSkaiciai);

console.log([atsitiktiniaiSkaiciai]);

// geras budas daryti su for

let tusciass = [];

for (let i = 0; i < 10; i++) {
  let betKoks = Math.floor(Math.random() * 100) + 1;
  tusciass.push(betKoks);
}

console.log('Random skaiciai: ', tusciass);

// arba su while

let masyvas = [];

let i = 0;

while (i < 10) {
  const randomSkaicius = Math.floor(Math.random() * 100) + 1;
  masyvas.push(randomSkaicius);
  i++;
}

console.log(masyvas);

// 5. Susikurti du masyvus dvieju studentu pazymiams saugoti.
// Ivesti po 3-5 pazymius kiekvienam studentui (iskart kuriant masyvus arba per push funkcija).
// Suskaiciuoti ir isvesti ju vidurkius. issiaiskinti, kurio studento vidurkis didesnis ir isvesti atsakyma.

let studentas1 = [8, 9, 10, 10]; // Pirmo studento pazymiai
let studentas2 = [8, 9, 10, 10]; // Antro studento pazymiai

let suma1 = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3]; // Surandom pirmo studento pazymiu suma.
let vidurkis1 = suma1 / studentas1.length; // Apskaiciuojam vidurki

let suma2 = studentas2[0] + studentas2[1] + studentas2[2] + studentas2[3]; // Surandom antro studento pazymiu suma.
let vidurkis2 = suma2 / studentas2.length; // Apskaiciuojam vidurki

if (vidurkis1 > vidurkis2) {
  // Jaigu pirmas vidurkis didesnis uz antra
  console.log('Pirmas mokinys turi didesni vidurki'); // isvesk: 'Pirmas mokinys turi didesni vidurki'
} else if (vidurkis2 > vidurkis1) {
  // Jaigu antras vidurkis didesnis uz pirma
  console.log('Antras mokinys turi didesni vidurki'); // isvesk: 'Antras mokinys turi didesni vidurki'
} else {
  // jaigu nei tas nei tas reishkias vidurkiai lygus ir
  console.log('Abu vidurkiai lygus'); // isvesk: 'Abu vidurkiai lygus'
}
