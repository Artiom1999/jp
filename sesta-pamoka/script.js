// Loginiai operatoriai &&, ||, !

// && - ir
// false && false = false
// false && true = false
// true && false = false
// true && true = true

const a = 4;
const b = 6;

// Turi butinai atitikti abi salygas
if (a > 0 && b > 0) {
  console.log('a ir b teigiami skaiciai');
} else {
  console.log('a arba b nera teigiamas skaicius');
}

//Pvz

let skaicius = 101;

if (skaicius > 0 && skaicius <= 100) {
  console.log('skaicius patenka tarp reziu nuo 0 iki 100');
} else if (skaicius > 0 && skaicius <= 1000) {
  console.log('Skaicius patenka tarp 100 ir 1000');
}

// || - arba
// false || false = false;
// false || false = false;
// true || false = true;
// true || true = true;

const c = 1;
const d = false;

// Turi atitikti bent viena salyga
if (c > 1 || d === true) {
  console.log('salyga yra teisinga');
} else {
  console.log('salyga yra neteisinga');
}

//PVZ

let skaicius2 = 100;

if (
  skaicius2 === 100 ||
  skaicius2 === 90 ||
  skaicius2 === 80 ||
  skaicius2 === 70
) {
  console.log('Salyga atitinka!');
} else {
  console.log('Salyga neatitinka');
}

// ! - ne
// !true = false;
// !false = true;

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log('Tu esi neprisijunges');
} else {
  console.log('Tu esi prisijunges');
}

// PvZ

const arTuriBilieta = false;
const yraVipNarys = true;

if (arTuriBilieta) {
  console.log('Uzeikite i koncerta!');
} else if (!arTuriBilieta && yraVipNarys) {
  console.log('Tu neturi bilieto, bet esi VIP narys tai uzeik i koncerta!');
} else if (!arTuriBilieta && !yraVipNarys) {
  console.log('Tu neturi nei bilieto nei esi vip narys.');
}

// Uzduotys

let pirmas = 8;
let antras = 6;
let trecias = 9;

let vidurkis = (pirmas + antras + trecias) / 3;

console.log(vidurkis.toFixed(1));

if (vidurkis && 10 >= 10) {
  console.log('Tinka');
} else if (vidurkis && 5 <= 8) {
  console.log('netinka');
}
