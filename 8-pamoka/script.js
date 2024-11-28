// Switch statement - palyginimo operatorius
// Leidzia palyginti kintamaji su daygybe skirtingu reiksmiu.

const day = 7;

switch (day) {
  case 1:
    console.log('Pirmadienis');
    break;
  case 2:
    console.log('Antradienis');
    break;
  case 3:
    console.log('Treciadienis');
    break;
  case 4:
    console.log('Ketvirtadienis');
    break;
  case 5:
    console.log('Penktadienis');
    break;
  case 6:
    console.log('Sestadienis');
    break;
  case 7:
    console.log('Sekmadienis');
    break;
  default:
    console.log('Tokios dienos nera');
}

let skaicius1 = 5;
let skaicius2 = 10;
let veiksmas = '+';

switch (veiksmas) {
  case '+':
    console.log(skaicius1 + skaicius2);
    break;
  case '-':
    console.log(skaicius1 - skaicius2);
    break;
  case '*':
    console.log(skaicius1 - skaicius2);
    break;
  default:
    console.log('Nezinomas veiksmas');
}

// uzduotys

// 1

let pasirinkimas = 4;

switch (pasirinkimas) {
  case 1:
    console.log('vartotojas laimejo vandens');
    break;
  case 2:
    console.log('vartotojas laimejo limonada');
    break;
  case 3:
    console.log('vartotojas laimejo arbata');
    break;
  case 4:
    console.log('vartotojas laimejo kava');
    break;
  default:
    alert('ivyko klaida');
}

// 2

let tikrinimoSkaiciai = 2;

let sk1 = 2;
let sk2 = 6;
let sk3 = 8;

switch (tikrinimoSkaiciai) {
  case 2:
    console.log(sk1 + sk2 + sk3);
    break;
  case 6:
    console.log(sk2 * sk3);
    break;
  case 8:
    console.log(sk1 ** 2);
    break;
  default:
    console.log('Kaida');
}

// 2.2

let sviesoforas = 'Zalia';

// switch (sviesoforas) {
// case 'Zalia':
//     alert('Gali vaziuoti');
//     break;
//   case 'Geltona':
//     alert('Palauk');
//     break;
//   case 'Raudona':
//     alert('Stovek!');
//     break;
// }
// end

// Uzduotis 1.1. Parasyti for, kuris isvestu kiekviena skaiciu, pradedant nuo 0 ir baigiant 10.
// "++" reiskia, kad kiekviena karta kintamaji didintu po viena karta.

for (let i = 0; i <= 10; i++) {
  console.log(i); // <-- cia rasome console log, jei norim pamatyti skaiciu sarasa
}

// 1.2. Parasyti for, kuris isvestu kas antra skaiciu, pradedant O ir baigiant 15.

for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

// 1.3. Parasyti for, kuris isvestu kas trecia skaiciu, pradedant 1 ir baigiant 20.
// Kiekviena skaiciu apskliausti lauztiniais skliaustais. Pvz.: [1][4][7]..

for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}

// 1.4. Parasyti for, kuris eitu pro kiekviena skaiciu nuo 1 iki 20.
// Jame apsirasyti if salyga, kuri patikrintu ar dabartinis skaicius dalinasi is 4,
// jei taip tai si skaiciu isvesti.

for (let i = 0; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(`Dabartinis skaicius dalijasi is 4: ${i}`);
  }
}

// 5. Susikurti kintamuosius reziu pradziai ir pabaigai nusakyti.
// Patikrinti, kad tai butu validu (pradzia turi buti ne mazesne nei pabaiga).
// Jei reziai tinkami, tuomet vykdyti for, kuris atskirose eilutese isvestu kiekviena skaiciu is tu reziu,
// bei atskiriant tarpu - tu skaiciu kvadratus.

let start = 3;
let end = 8;

if (start < end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i} ${i ** 2}`);
  }
} else {
  console.log(`kodas nevykdomas, patikrinti kintamuosius`);
}

// 6. Susikurti kintamuosius reziu pradziai ir pabaigai nusakyti.
// Patikrinti, kad tai butu validu (pradzia turi buti mazesne nei pabaiga).
// Jei reziai tinkami, tuomet vykdyti for,
// kuris is duotu skaiciu isvestu visus nelyginius skaicius arba tuos, kurie dalinasi is 8.

let pradzia1 = 3;
let pabaiga2 = 8;

if (pradzia1 < pabaiga2) {
  for (let i = pradzia1; i <= pabaiga2; i++) {
    if (i % 2 !== 0 || i % 8 === 0) {
      console.log(i);
    }
  }
} else {
  console.log('Pradzia didesne arba lygi pabaigai');
}

// 7. Be daugybos veiksmo programoje, sudauginti du skaicius

let num1 = 5;
let num2 = 3;
let result = 0;

for (let i = 0; i < Math.abs(num2); i++) {
  result += num1;
}

console.log(result);
