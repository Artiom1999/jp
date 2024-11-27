// 1. Isveskite visus skaicius nuo 1 iki 20.

let skaicius = 1;

while (skaicius <= 20) {
  console.log(skaicius);
  skaicius++;
}

// 2. isvesti nuo 1 iki 50. prie lyginiu - lyginis, prie nelyginiu-  nelyginis.

let skaicius2 = 1;

while (skaicius2 <= 50) {
  if (skaicius2 % 2 === 0) {
    console.log(`${skaicius2} lyginis`);
  } else {
    console.log(`${skaicius2} nelyginis`);
  }
  skaicius2++;
}

// 3. Skaiciai nuo 25 iki 50. Jei dalinasi is 3- isvesti dalinasi.

let skaicius3 = 25;

while (skaicius3 <= 50) {
  if (skaicius3 % 3 === 0) {
    console.log('skaicius:', skaicius3, 'dalinasi is 3');
  } else {
    console.log(skaicius3);
  }
  skaicius3++;
}

//  4. isvedineti visus skaicius nuo 1 iki kol pasitaikys skaicius, kuris dalinasi is 3 ir 5

let skaicius4 = 1;

while (true) {
  console.log(skaicius4);
  if (skaicius4 % 3 === 0 && skaicius4 % 5 === 0) {
    break;
  }
  skaicius4++;
}

// 5. is skaiciu nuo 1 iki 100 raskite visu lyginiu skaiciu suma

let suma = 0;
let skaicius5 = 1;

while (skaicius5 <= 100) {
  if (skaicius5 % 2 === 0) {
    suma += skaicius5;
  }
  skaicius5++;
}
console.log(`Suma:`, suma);

// 6. pavyzdi pakeisti taip, kad toje pacioje eiluteje isvestu ne tik skaiciu, bet ir jo kvadrata:

let skaicius6 = 1;

while (skaicius6 < 5) {
  console.log(skaicius6, `jo kvadratas ${skaicius6 * skaicius6}`);
  skaicius6++;
}

// 7. Isvesti atsitiktini kieki atsitiktiniu skaiciu:

// Function to generate a random integer between min and max (inclusive)

let kiekis = Math.floor(Math.random() * 10) + 1;
while (kiekis > 0) {
  let skaicius7 = Math.floor(Math.random() * 100);
  console.log(skaicius7);
  kiekis--;
}

// 8. isvesti atsitiktini kieki atsitiktiniu skaiciu. Rasti siu skaiciu suma:

let kiekis8 = Math.floor(Math.random() * 10) + 1;
let suma8 = 0;

while (kiekis8 > 0) {
  let skaicius8 = Math.floor(Math.random() * 100);
  console.log(skaicius8);
  suma8 += skaicius8;
  kiekis8--;
}

console.log('suma:', suma8);
