// Pvz

let skaiciai = [-1, -2, -3, 1, 2, 3];

let teigiami_skaiciai = [];
let neigiami_skaiciai = [];

for (const skaicius of skaiciai) {
  if (skaicius > 0) {
    teigiami_skaiciai.push(skaicius);
  } else {
    neigiami_skaiciai.push(skaicius);
  }
}

console.log('Teigiamas skaicius', teigiami_skaiciai);
console.log('Neigiami skaiciai', neigiami_skaiciai);

// 17. Sukurkite bet kokiu zodziu masyva ir uzpildykite ji duomenimis.
// Isveskite visus zodzius su indeksais i atskiras eilutes

let zodziai = ['medis', 'tvora', 'namas', 'kede', 'stalas'];

for (let indeksas in zodziai) {
  console.log(`${Number(indeksas) + 1} - ${zodziai[indeksas]}`);
}

// 18. Susikurkite masyva pirkiniu sarasui saugoti ir uzpidykite ji duomenimis.
// Isveskite kiek pirkiniu yra sarase.Taip pat,isveskite kiekviena irasa atskiroje eiluteje,
// pries kiekviena parasant bruksniuka ar koki kita skirtuka.

let pirkiniai = ['pienas', 'jogurtas', 'bananas', 'sviestas'];

for (let i = 0; i < pirkiniai.length; i++) {
  console.log('-', pirkiniai[i]);
}

console.log(pirkiniai.length, 'pirkiniai sarase');

// Lektoriaus padaryta

const pirkiniaiL = ['Pienas', 'Kefyras', 'Duona', 'Alus'];

console.log('Isviso pirkiniu yra', pirkiniaiL.length);

for (const pirkinys of pirkiniaiL) {
  console.log(`- ${pirkinys}`);
}

// 19 Susikurkite masyva studento pazymiams saugoti.
// uzpildykite si masyva duomenimis.Raskite pazymiu vidurki.
// Isveskite visus siuos pazymius ir gauta vidurki.

// Mano padaryta nelabai gerai

let studentas1 = [8, 9, 10, 10];

let suma1 = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3];
let vidurkis1 = suma1 / studentas1.length;

console.log(studentas1, '-Studento pazymiai');
console.log(vidurkis1.toFixed(0), '-Pazimiu vidurkis');

// Lektoriaus padaryta su ciklais kaip reikejo

const pazymiai = [10, 7, 8, 5, 123];
let suma = 0;
let vidurkis = 0;

for (let pazymys of pazymiai) {
  suma += pazymys;
}

vidurkis = suma / pazymiai.length;

console.log(vidurkis.toFixed(0));

// antras variantas su pazymiais

const pazymiai2 = [10, 7, 8, 5];
let suma2 = 0;

for (let pazymys of pazymiai2) {
  suma2 += pazymys;
}

vidurkis = suma2 / pazymiai2.length;

console.log('Pazymiai:');

for (let index in pazymiai2) {
  console.log(`${Number(index) + 1}: ${pazymiai2[index]}`);
}

console.log('Vidurkis:', vidurkis);

// 20 Susikukite masyva keliones nuovaziuotiems kilometrams saugoti ir uzpildykite ji duomenimis
// (pzv 120, 145, 90 ir pan.,kur kiekviena skaiciusreiskia kiek km kuria diena buvo nuvaziuota).
// Isveskite visus nuvaziuotus per diena kilomertrus, kurie yra didesni nei 150.

const nuvaziuotiKilometrai = [100, 200, 60, 60, 160];

for (let kilometrai of nuvaziuotiKilometrai) {
  if (kilometrai > 150) {
    console.log(
      'nuvaziuoti kilometrai per diena kurie didesni nei 150',
      kilometrai
    );
  } else {
    console.log(
      'nuvaziuoti kilometrai per diena kurie mazesni  nei 150',
      kilometrai
    );
  }
}

// Padare Lektorius

const kilometrai = [100, 150, 50, 40, 200, 300];
const kilometraiVirs150 = [];

for (let km of kilometrai) {
  if (km > 150) {
    kilometraiVirs150.push(km);
  }
}

console.log(kilometraiVirs150);

// 21. Susikurkite masyva failu pavadinimams saugoti, uzpildykite ji duomenimis.
// Jums reikes nuskaityti siuos failus, todel pirma noresite patikrinti su kuriais galite dirbti
// Isveskite i ekrana tik tuos failus, kuriu galune yra .txt arba .json tipo.

// Sukuriame masyvą su failų pavadinimais

let files = [
  'document.txt',
  'image.png',
  'data.json',
  'script.js',
  'notes.txt',
  'config.json',
  'video.mp4',
];

let filteredFiles = files.filter(
  (file) => file.endsWith('.txt') || file.endsWith('.json')
);

console.log('Failai su .txt arba .json galūnėmis:', filteredFiles);

// Lektoriaus budas

let failai = [
  'ataskaita.txt',
  'duomenys.json',
  'nuotrauka.png',
  'apskaita.csv',
];

for (let failas of failai) {
  if (failas.endsWith('.txt') || failas.endsWith('.json')) {
    console.log(failas);
  }
}

// 22. Susikurkite masyva automobiliu markems saugoti ir uzpildykite ji duomenimis.
// Isveskite kiekviena automobili atskiroje eiluteje, nurodant kiek raidziu sudaro jo pavadinima.

let automobiliai = ['BMW', 'Mercedes', 'Audi', 'Ferrari', 'Lamborghini'];

for (let indeksas in automobiliai) {
  console.log(`${Number(indeksas) + 1} - ${automobiliai[indeksas]}`);
}

// Lektoriaus budas

const automobiliuMarkes = ['bmw', 'audi', 'toyota', 'ford'];

for (let marke of automobiliuMarkes) {
  console.log(`${marke.toUpperCase()} - ${marke.length} raidės`);
}

// 23

const kodai = ['404', '401', '500', '501'];
const koduZinutes = [
  'Sasajos klaida',
  'Serverio klaida',
  'Nera duomenu',
  'Dingo internetas',
];

for (let indeksas in kodai) {
  console.log(`${kodai[indeksas]} - ${koduZinutes[indeksas]}`);
}

// 24. Sukurkite masyva sandelio lykuciams saugoti(kiekvienas atskiras narys masyve yra atskiros prekes likutis).
// Su kiekvienu likuciu paskaiciuokite per kiek dienu bus iskirptas, jei per diena vidutiniskai yra nuperkami 5 vnt.
// Isveskite atsakymus atskirose eilutese, nurodant kiek yra dabar ie kiek dienu uzteks jo. Pavyzdziui, jeigu
// yra likuciai 74,54 ir 32, tai 74vnt. prekes uzteks mazdaug 15dienu, 54 vnt. prekes uzteks mazdaug 11 dienu ir t.t.

let masyvas24 = [74, 54, 32];
let perDienaNuperka = [5];

for (let index in masyvas24) {
  console.log(`${masyvas24[index]} - yra prekiu`);
}

// 25. Susikukite masyva studento pazymiams saugoti. Uzpildykite si masyva atsitiktinai
// sugeneruotais pazymiais. Raskite vidurki. Raskite kiek neigiamu pazymiu studentas gavo (mazesniu nei 5).
// Isveskite visus teigiamus pazymius,gauta vidurki ir neigiamu pazymiu kieki.
