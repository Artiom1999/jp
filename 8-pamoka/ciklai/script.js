// Ciklai - for
// Sis ciklas naudojamas kai yra zinoma kiek kartu jis bus kartojamas
// for (kintamasis; salyga; operacija) {kodas}
// kintamasis - ciklo darbui reikalingas kintamasis,

// ● kintamasis - ciklo darbui reikalingas kintamasis,
// kuris bus sunaikintas ciklui baigus darbą,
// dažniausiai naudojamas norint suvaldyti kiek
// kartų ciklas turi būti vykdomas.

// ● sąlyga - ciklas bus vykdomas kol sąlyga bus
// teisinga (grąžins true), sąlyga apsirašo tokiu
// pačiu principu kaip apsirašydavo patikrinimo
// sąlygoje if.

// ● operacija - kas bus daroma kiekvienos ciklo iteracijos metu, dažniausiai - didinamas kintamasis.

// ● kodas - kodas, kuris bus vykdomas jei sąlyga teisinga.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log('skaicius: ' + i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log('skaicius: ' + i);
}

// Nelyginiai skaiciai

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log('nelyginis skaicius: ' + i);
  } else {
    console.log('Lyginiai skaiciai: ' + i);
  }
}

// Switch

for (let i = 1; i <= 5; i++)
  switch (i) {
    case 1:
      console.log('Vienas');
      break;
    case 2:
      console.log('Du');
      break;
    case 3:
      console.log('Tris');
      break;
    case 4:
      console.log('Keturi');
      break;
    case 5:
      console.log('Penki');
      break;
  }
