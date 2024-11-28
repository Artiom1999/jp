// Uzduotys, kurias Lektorius gavo per interviu.

// 8. Rasti visu  skaiciu nuo 1 iki 100 suma.

let start = 1;
let end = 100;

let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

console.log(sum);

// 9. Rasti visu lyginiu skaiciu nuo 20 iki 50 suma.

let sumaLyginiai = 0;

for (let i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    sumaLyginiai += i;
  }
}

console.log(sumaLyginiai);

// 10. Rasti visu nelyginiu skaiciu nuo 30 iki 60 suma.

let sumaNelyginiai = 0;

for (let i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    sumaNelyginiai += i;
  }
}

console.log(sumaNelyginiai);

// 11. Rasti visu skaiciu, zemesniu uz 1000 ir kurie dalinasi is 3 arba 5, suma.
// Atsakymas turi buti 233168.

let suma = 0;

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    suma += i;
  }
}

console.log(suma);

// 12. write a program that prints the numbers from 1 to 100.
// But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'.
// For numbers which are multiples of both three and five print 'FizzBuzz'.

for (i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 13.(sunkesne) Parasyti for cikla, kuris isvesty norima kiekj fibonaciaus skaiciu i ekrana.
// Fibonaciaus sekoje kiekvienas skaidius yra lygus pries ji ejusiu dvieju skaidiu sumai: 1, 1, 2, 3, 5, 8, 13, 21...
// 1. Susikurkite tris sveikuju skaiiy kintamuosius, kurie jums padés tai pasiekti.
// 1. Pirmi du kintamieji saugos paskutinius du skaitius.
// 2. Treciasis bus siu pirmy dvieju skaiciu suma.
// 2. Pirmus du skaidius isveskite ne cikle, o pries jj ir cikla pradékite vykdyti nuo 2, o ne nuo 0.
// 3. Kiekvieno ciklo metu turite perskaiciuot treciaji skaiciu (pirmy dvieju skaiciy sudétis),
// tuomet pirmasis skaidius yra lygus antram, o antrasis lygus treiam, isvesti j ekrana trecia skaiiy.

let num1 = 1;
let num2 = 1;

let sum3 = 0;

for (let i = 2; i <= 10; i++) {
  sum3 = num1 + num2;
  num1 = num2;
  num2 = sum3;

  console.log(sum3);
}

// While
// Vykdome skaičiavimus ir norime juos vykdyti iki kol pasieksime tinkamą rezultatą.

let skaicius = 1;

while (skaicius <= 5) {
  console.log(skaicius);
  skaicius++; // tiek kartu prides
}

let tekstas = 'Hello world';
let kiekLiko = 10; // kiek norim kartu isves

while (kiekLiko > 0) {
  console.log(tekstas);
  kiekLiko--; // tiek kartu atims
}

let prekiuKiekis = 30; // 30 kartu issives

while (prekiuKiekis > 0) {
  console.log('Prekiu likutis:', prekiuKiekis);
  prekiuKiekis--;
}
