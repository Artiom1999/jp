// Pratimai

let pirmas = 5;
let antras = 10;
let trecias = 15;

// 1.Ar pirmas ir antras skaiciai yra lygus?

if (pirmas === antras) {
  console.log('1. Pirmas antras sakaiciai yra lygus');
} else {
  console.log('1. Pirmas ir antras skaiciai yra nelygus');
}

// 2.Ar antras ir trecias skaiciai yra lygus?

if (antras === trecias) {
  console.log('2. Antras ir trecias skaiciai yra lygus');
} else {
  console.log('2. Antras ir trecias skaiciai yra nelygus');
}

// 3.Ar pirmas skaicius yra didesnis uz antraji?

const rezultatas =
  pirmas > antras
    ? '3. Pirmas skaicius yra didesnis uz antra'
    : '3. Pirmas skaicius nera didesnis uz antra';

console.log(rezultatas);

// 4.Ar antras skaicius yra didesnis uz dviguba treciojo skaiciaus reisme(trecias skaicius padaugintas is 2)?;

if (antras > trecias ** 2) {
  console.log('4. Antras skaicius yra didesnis uz trecio kvadrata');
} else {
  console.log('4. Antras skaicius nera didesnis uz antro kvadrata');
}

// arba trenary

const asakymas =
  antras > trecias ** 2
    ? '4.2 Antras skaicius yra didesnis uz trecio kvadrata'
    : '4.2 Antras skaicius nera didesnis uz antro kvadrata';

console.log(asakymas);

// 5.Ar pirmas skaicius yr lyginis(ar dalinasi is 2)?

if (pirmas % 2 === 0) {
  console.log('5. Pirmas skaicius yra lyginis');
} else {
  console.log('5. Pirmas skaicius yra nelyginis');
}

// arba trenary

const asakymas2 =
  pirmas % 2 === 0
    ? '5.2 Pirmas skaicius yra lyginis'
    : '5.2 Pirmas skaicius yra nelyginis';

console.log(asakymas2);

// 6.Ar antras skaicius yr nelyginis(ar nedalinasi is 2)?

if (antras % 2 !== 0) {
  console.log('6. Antras skaicius yra nelyginis');
} else {
  console.log('6 Antras skaicius yra lyginis');
}

// 7.Ar trecias skaicius yra teigiamas?(didesnis uz 0)?

if (trecias > 0) {
  console.log('7. Trecias skaicius yra teigiamas');
} else {
  console.log('7.trecias skaicius yra neigiamas');
}

// 8.Ar pirmas skaicius yra neigiamas?(mazesnis uz 0)?

if (pirmas < 0) {
  console.log('8. Pirmas skaicius yra neigiamas ');
} else {
  console.log('8. Pirmas skaicius yra teigiamas');
}

// 9.Ar antras skaicius dalinasi is 4?

if (antras % 4 === 0) {
  console.log('9. Antras skaicius dalinasi is 4');
} else {
  console.log('9. Antras skaicius nesidalina is 4');
}

// 10.Ar trecias skaicius dalinasi is 8?

if (trecias % 8 === 0) {
  console.log('10. Antras skaicius dalinasi is 8');
} else {
  console.log('10. Antras skaicius nesidalina is 8');
}

// Uzduotys 2/2

// 1

let age = 100;
let ageStatus = age >= 18;

if (age >= 18) {
  ageStatus = 'jus galite balsuoti';
} else {
  ageStatus = 'jus balsuoti negalite';
}

console.log(ageStatus);

// 2

let pirmas2 = 8;
let antras2 = 7;
let trecias2 = 6;

let vidurkis = (8 + 7 + 6) / 3;
let teigiamas = 5;
let teigiamasVidurkis = vidurkis >= teigiamas;

if (vidurkis >= teigiamas) teigiamasVidurkis = 'vidurkis teigiamas';
else teigiamasVidurkis = 'vidurkis neigiamas';

console.log(teigiamasVidurkis);

// 3

let skaicius = 20;
