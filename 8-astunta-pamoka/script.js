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

switch (sviesoforas) {
  case 'Zalia':
    alert('Gali vaziuoti');
    break;
  case 'Geltona':
    alert('Palauk');
    break;
  case 'Raudona':
    alert('Stovek!');
    break;
}
// end
