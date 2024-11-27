// // // 10
// // const skaiciuMasyvas2 = [];
// // const limitas = 10;
// // let sumaIs4 = 0;

// // for (let i = 0; i < limitas; i++) {
// //   const randomNumber = Math.floor(Math.random() * 100) + 1;

// //   skaiciuMasyvas2.push(randomNumber);
// // }

// // for (let i = 0; i < skaiciuMasyvas2.length; i++) {
// //   const skaicius = skaiciuMasyvas2[i];

// //   if (skaicius % 4 === 0) {
// //     console.log(skaicius);
// //     sumaIs4 += skaicius;
// //   }
// // }

// // console.log('Suma', sumaIs4);

// // // 11
// // const pazymiai = [];
// // let sumaPazymiu = 0;

// // for (let i = 0; i < 5; i++) {
// //   const randomNumber = Math.floor(Math.random() * 10) + 1;

// //   pazymiai.push(randomNumber);
// // }

// // for (let i = 0; i < pazymiai.length; i++) {
// //   sumaPazymiu += pazymiai[i];
// // }

// // let vidurkis = sumaPazymiu / pazymiai.length;

// // console.log('Pazymiai', pazymiai);
// // console.log('Suma', sumaPazymiu);
// // console.log('Vidurkis', vidurkis);

// // 13

// let skaiciusMasyvas = [4, 2, 5, 8, 9];

// for (let i = 0; i < skaiciusMasyvas.length; i++) {
//   let skaicius = skaiciusMasyvas[i];
//   let skaiciai = skaicius.toString();

//   if (skaicius % 2 === 0) {
//     skaiciai += ` (kvadratas: ${skaicius ** 2})`;
//   }

//   console.log(skaiciai);
// }

// // 14

// let skaiciusMasyvas14 = [4, 2, 5, 8, 9];

// for (let i = 0; i < skaiciusMasyvas14.length; i++) {
//   let skaicius = skaiciusMasyvas14[i];
//   let skaiciai = skaicius.toString();

//   if (skaicius >= 5) {
//     skaiciai += ` teigiamas pazymis`;
//   } else if (skaicius < 5) {
//     skaiciai += ` neigiamas pazymis`;
//   }

//   console.log(skaiciai);
// }

// // for...of loops
// // - Grazina reiksmes is masyvo (ne indeksus)
// // - Sukurtas veikti su masyvais, objektais ir stringais

// const string = 'string';

// for (let raide of string) {
//   console.log(raide);
// }

// const array = [1, 2, 3, 4, 5];

// for (let number of array) {
//   console.log(number);
// }

// // for...in loops
// // Grazina indeksus is masyvo (ne reiksmes)

// // const masyvas1 = ['a', 'b', 'c'];

// // for (let index in masyvas) {
// //   console.log(index);
// // }

// // pvz

const pazymiai = [10, 2, 6, 6, 1];

for (let pazymis of pazymiai) {
  if (pazymis > 5) {
    console.log('Pazymis yra teigiamas', pazymis);
  } else {
    console.log('Pazymis yra neigiamas', pazymis);
  }
}

let komanda = [
  'Programuotojas',
  'Dizaineris',
  'Vadybininkas',
  'Senjoras',
  'Jauniklis',
  'Vidutinis',
];

// Grazina reiksme
for (const narys of komanda) {
  console.log(narys);
}

// Grazina indeksa
for (const narys in komanda) {
  console.log(narys);
}
