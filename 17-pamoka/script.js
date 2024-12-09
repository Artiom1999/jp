// 6 uzduotys

function showOfficerInfo(
  vardas,
  pavarde,
  amzius,
  alga,
  etatas,
  specializacija
) {
  let suformatuotasSakinys = `
      Sveiki, mano vardas ir pavarde yra ${vardas} ${pavarde}, man yra ${amzius} metu, dirbu ${etatas} etatu as 
      uzdirbu ${alga} euru per menesi, mano specializacija: ${specializacija}
    `;

  return suformatuotasSakinys;
}

console.log(
  showOfficerInfo("Edgaras", "Pavardenis", 30, 2000, "pilnu", "kriminalistas")
);

// pvz2 6 uzduoties

function showOfficerInfo() {
  const officer = {
    vardas: "Edgaras",
    pavarde: "Pavarde",
    amzius: 30,
    statusas: "aktyvus",
  };

  return officer;
}

console.log(showOfficerInfo().vardas);
console.log(showOfficerInfo().pavarde);

// pvz3 grazinimas objekto masyve

function showOfficerInfo() {
  const officer = {
    vardas: "Edgaras",
    pavarde: "Pavarde",
    amzius: 30,
    statusas: "aktyvus",
  };

  return [officer];
}

console.log(showOfficerInfo());

// 7. Sukurkite funkcija kuri isvestu 10 atsitiktiniu skaiciu vienoje eiluteje,skaicius askiriant tarpu. Sia
// funkcija isveskite 5 kartus

function skaicicai() {
  let randomskaiciai = Math.floor(Math.random() * 10) + 1;

  console.log(randomskaiciai ** 10);
}
for (let i = 0; i < 5; i++) {
  skaicicai();
}
//pvz 7

function generateRandomNumbers() {
  let result = "";

  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    let gap = i < 9 ? " " : "";

    result += number + gap;
  }

  console.log(result);
}

for (let i = 0; i < 5; i++) {
  generateRandomNumbers();
}

// 8. Sukurkite funkcija,kuri isvestu atsitiktini skaiciu. Uz funkcijos ribu sukurkite cikla,
// kuri butu vykdomas 10 kartu. Iskvieskite sukurta funkcija cikle. Turetume pamatyti 10 atsitiktiniu skaiciu.

function skaicicai() {
  let randomskaiciai = Math.floor(Math.random() * 10) + 1;

  console.log(randomskaiciai ** 10);
}
for (let i = 0; i < 10; i++) {
  skaicicai();
}

//pvz 8

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber());
}

// 9. Sukurkite funkcija pasisveikinimui, siai funkcijai per argumentus perduokite varda, fukcijoje isveskite teksta
// labas ir gauta varda. Sukurkite kita funkcija, kuri irgi per argumentus gautu varda, taciau pasakytu 'viso gero'
// ir pati varda. Isvieskite abi funkcijas, perduodant kintamaji joms.

// 10.Sukurkite funkcija, kuriai perduotumete du skaicius. Si funkcija turi rasti kuris skaicius yra didesnis ir
// isvesti gauta atsakyma, o jei skaiciai lygus - tuomet isvesti, kad skaiciai lygus. Iskvieskite sia funkcija
// keleta kartu, duodant skirtingus skaicius.

// pvz5

function turnOnWipers() {
  // ijungia valytuvus
}

function turnOnAc() {
  // Ijungtu kondicionieriu
}

function createWeatherAlert(temperature, isRaining) {
  if (temperature < 0) {
    return "Ispejimas: lauke minusas, atsargiai vairuokite!";
  } else if (isRaining) {
    turnOnWipers();
    return "Ispejimas: lauke lyja, slidus kelias!";
  } else if (temperature > 30) {
    turnOnAc();
    return "Ispejimas: Lauke karsta! nepalikite augintiniu";
  } else {
    return "";
  }
}

// pvz 6

function isShopOpen() {
  const currentHour = new Date().getHours();

  if (currentHour >= 9 && currentHour <= 20) {
    return "Parduotuve yra atidaryta!";
  } else {
    return "Parduotuve yra uzdaryta.";
  }
}

console.log(isShopOpen());

// pvz 7

function checkTicketPrice(age) {
  switch (age) {
    case 1:
      return "kaina 1 euras";
      break;
    case 2:
      return "kaina 2 eurai";
      break;
    default:
      return "Pilna kaina: 10 euru";
  }
}

console.log(checkTicketPrice(3));

// Funkciju pavadinimai:

// a. Kai norime gauti duomenis

function getUserName() {
  return "username123..";
}

function checkWeather() {
  return "sunny";
}

function retrieveOrderDetails() {
  return "order details...";
}

// b. Kai norime atlikti veiksma pvz nustatyti duomenis arba juos pakeisti

function setUserName(name) {
  console.log("setting username to" + name);
}

function updateWeather(temperature) {
  console.log("updating temperature to", temperature);
}

function changePassword(newPassword) {
  console.log("changing password to:", newPassword);
}

// c. Tikrinimas arba validacija , Boolean reiksmes

function isEmailValid(email) {
  return email.includes("@");
}

function hasPermissions(role) {
  return role === "admin";
}

// Pvz 7

function hasPermissions(role) {
  return role === "admin";
}

function deletePost(role, postName) {
  if (hasPermissions(role)) {
    console.log(`Postas su pavadinimu: "${postName}" buvo istrintas.`);
  } else {
    console.log(
      `Klaida. vartotojas su role "${role.toUpperCase()}" neturi teises istrinti irasu.`
    );
  }
}

deletePost("admin", "Kaip investuoti pinigus?");

// 11. Susikurkite funkcija kuri per argumentus gautu automobiliu duomenis (marke,modelis,gamybos metai,
// darbinis turis).Si funkcija turetu siuos duomenis isvesti kaip nors grziai formatuotai. Iskvieskite
// sia funkcija du kartus, peduodant skirtingus duomenis jai.

const bmw = {
  id: 1,
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Silver",
  mileage: 20000,
  price: 25000,
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "2.0L 4-cylinder",
  horsepower: 169,
  features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
  owners: 1,
  image: "https://fakeimg.pl/500x500/cccccc",
};

const bmw2 = {
  id: 1,
  model: "Corolla",
  year: 2022,
  color: "Silver",
  mileage: 20000,
  price: 25000,
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "2.0L 4-cylinder",
  horsepower: 169,
  features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
  owners: 1,
  image: "https://fakeimg.pl/500x500/cccccc",
};

function showCarDetail(car) {
  console.log("Automobilio duomenys:");
  console.log("Markė:", car.make);
  console.log("Modelis:", car.model);
  console.log("Gamybos metai:", car.year);
  console.log("Variklio turis:", car.engine);
  console.log("Papildoma iranga:", car.features);
}

showCarDetail(bmw);

// 12. Sukurkite funkcija sumai skaiciuoti, si funkcija per argumentus turetu gauti du skaicius, bei isvesti
// pati veiksma kartu su atsakymu(pvz 7+5 = 12).Sukurkite tokias pacias funkcijas skirtumui,sandaugai ir
// dalmeniui rasi. Sukurkite dar viena funkcija, kuri sugeneruotu du atsitiktinius skaicius, bei iskviestu 4
// funkcijas, perduodant joms sugeneruotus skaicius. Sia bendraja funkcija iskvieskite keleta kartu.

function sudek(a, b) {
  let suma = a + b;
  console.log(`${a} + ${b} = ${suma}`);
}
function atimk(a, b) {
  let skirtumas = a - b;
  console.log(`${a} - ${b} = ${skirtumas}`);
}
function daugink(a, b) {
  let sandauga = a * b;
  console.log(`${a} * ${b} = ${sandauga}`);
}
function dalink(a, b) {
  let dalmuo = a / b;
  console.log(`${a} / ${b} = ${dalmuo.toFixed(2)}`);
}
function sugeneruok2SkaiciusIrSkaiciuok() {
  let a = Math.floor(Math.random() * 100 + 1);
  let b = Math.floor(Math.random() * 100 + 1);

  sudek(a, b);
  atimk(a, b);
  daugink(a, b);
  dalink(a, b);
}

// 13. Sukurkite funkcija, kuri per argumentus priimtu zodziu masyva. Funkcijoje isvekite visus zodzius
// is masyvo atskirose eilutese, nurodant zodzio ilgi (simboliu kieki). Uz funkcijos ribu susikurkite zodziu
// masyva ir uzpildykite ji duomenimis. Iskvieskite sukurta funkcija perduodant turima masyva.

function isvestiZodziusSuIlgiu(zodziai) {
  for (let i = 0; i < zodziai.length; i++) {
    console.log(`${zodziai[i]} - Ilgis: ${zodziai[i].length} simboliai`);
  }
}

let zodziuMasyvas = ["JavaScript", "funkcija", "masyvas", "pavyzdys", "kodas"];

isvestiZodziusSuIlgiu(zodziuMasyvas);

// 14. Susikurkite funkcija, kuri per argumentus priimtu skaiciu masyva. Funkcija turetu atspausdint visus skaicius,
// sialia ju isvedant to skaiciaus kvadrata ir ji padalinta is dvieju. Uz fukcijos ribu susikurkite du skaicius
// masyvus ir uzpildykite ji duomenimis. Iskvieskite funkcija du kartus, kiekviena karta perduodant skirtinga turima
// masyva.

function printSquareAndHalf(skaiciai) {
  for (let i = 0; i < skaiciai.length; i++) {
    let num = skaiciai[i];
    console.log(
      `${num} kvadratas: ${num * num}, padalintas iš 2: ${(num * num) / 2}`
    );
  }
}

let masyvas1 = [2, 4, 6];

let masyvas2 = [1, 3, 5];

printSquareAndHalf(masyvas1);

printSquareAndHalf(masyvas2);

// 15. Susikurkite funkcija, kuri per argumentus priimtu pazymiu masyva, bei studento varda su pavarde. Funkcija
// turetu isvesti jo varda ir pavarde,jo pazymius. Taip pat, suskaiciuoti vidurki, bei ji isvesti. Uz funkcijos ribu
// susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentu pazymiams saugoti ir uzpildykite juos
// duomenimis. Iskvieskite sia funkcija perduodant visus reikalingus duomenis.

function isveskStudentoInformacija(vardas, pavarde, pazymiai) {
  console.log(`Studentas: ${vardas} ${pavarde}`);
  console.log(`Studento pazymiai: ${pazymiai}`);

  let suma = 0;
  for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
  }

  let vidurkis = suma / pazymiai.length;

  console.log(`Vidurkis: ${vidurkis}`);
}

isveskStudentoInformacija("Tomas", "Tomaitis", [5, 6, 7, 9]);

// 16. Susikurkite funkcija, kuri per argumentus priimtu skaiciu masyva. Funkcija turetu rasti didziausia skaiciu
// is masyvo bei isvesti gauta atsakymus. Taip pat, susikurkite funkcija, kuri per argumentus priimtu masyva ir i
// ji sugeneruotu pasirinkta kieki atsitiktiniu skaiciu. Susikurkite tris tuscius masyvus.
// Isveskite atsitiktiniu skaiciu generavimo funkcija tris kartus, kiekviena karta perduodant funkcijai vis kita
// masyva. Kai duomenys bus uzpildyti, masyvuose esama informacija issiveskite norimu budu (per console.log arba
// per dar atskira funkcija). Tuomet kvieskite didziausio skaiciaus paieskos funkcija tris kartus, kiekviena karta
// perduodant skirtinga masyva i ja.

function findBiggestNumber(numbers) {
  let biggestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
      biggestNumber = numbers[i];
    }
  }
  console.log("Didziausias skaicius masyve yra:", biggestNumber);
}

function generateRandomNumbers(numbers, amount) {
  for (let i = 0; i < amount; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
}

let masyvas = [];
let masyvas16 = [];
let masyvas26 = [];

generateRandomNumbers(masyvas, 10);
generateRandomNumbers(masyvas16, 15);
generateRandomNumbers(masyvas26, 3000);

console.log(masyvas);
console.log(masyvas16);
console.log(masyvas26);
