// Async await
// Tai yra sintakses "cukrus", kuris leidzia rasyti asinchronini koda, taciau ji kontrolioti kaip sinchronini koda.

// PVZ:

// Async zodelis, pavercia mano funkcija i Promise
async function getTodos() {
  // Noriu kad mano konstanta butu lygi fetch funkcijai,kuri grazina duomenis API
  // Await naudojam tik su async funkcija,laukiame kol Promise (fetch) grazins duomenis.
  const response = await fetch('./api/todo.json');

  if (response.status !== 200) {
    throw new Error('Cannot fetch the data from the API');
  } else {
    return await response.json();
  }
}

// getTodos funkcija grazina Promise, todel galime naudoti .then() ir .catch()
getTodos()
  .then((duomenys) => {
    console.log(duomenys);
  })
  .catch((error) => {
    console.log('Klaida:', error);
  });

// Pratimai

// Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
// turėtų vykdyti callback funkciją po 2s.

// Sukuriam funkcija kuri priima callback funkcija kaip parametra
function delayedHello(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

// Sukuriam callback funkcija
function sayHello() {
  console.log('hello!');
}

// Iskvieciame delayedHello funkcija ir perduodam sayHello funkcijan kaip parametra
delayedHello(sayHello);

// Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
// duomenimis.

// JS funkcija
const fetchIngredients = async () => {
  // Daro HTTP Request
  const response = await fetch('./api/ingredientai.json');
  if (!response.ok) {
    throw new Error('Klaida, nepavyko gauti duomenu is API');
  } else {
    // Grazina duomenis
    return await response.json();
  }
};

fetchIngredients()
  .then((duomenys) => {
    console.log(duomenys);
  })

  .catch((error) => {
    console.log('Klaida:', error);
  });

// Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
// funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
// callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
// lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija

// [1, 2, 3, 4]
function arLyginiaiSkaiciai(masyvas, callback) {
  for (const item of masyvas) {
    callback(item);
  }
}

function callback(num) {
  const isEven = num % 2 === 0;

  console.log(`${num} yra ${isEven ? 'lyfiniais' : 'Nelyginis'}`);
}

const skaiciusMasyvas = [1, 2, 3, 4, 5, 6, 7, 8];
arLyginiaiSkaiciai(skaiciusMasyvas, callback);

// 4.Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
// reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
// nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
// grąžinti atsiųsto "string" ilgį.
// - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
// - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
// nariui iškviest funkciją koksIlgis(string)

function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
  masyvas.forEach((string) => {
    const ilgis = callbackFunkcija(string);
    console.log(`Zodis "${string}" turi ilgi: ${ilgis}`);
  });
}

function koksIlgis(string) {
  return string.length;
}

const zodziai = ['obuolys', 'bananas', 'knyga', 'automobilis'];
patikrinkZodzioIlgi(zodziai, koksIlgis);

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
// callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
// esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
// modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
// funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
// atrinktos objekto properties, tarkim tik markė ir modelis)

function atrinktiMarkeModeli(automobilis) {
  return {
    marke: automobilis.marke,
    modelis: automobilis.modelis,
  };
}

function iteruotiPerObjektus(masyvas, callbackFunkcija) {
  masyvas.forEach(function (objektas) {
    const naujasObjektas = callbackFunkcija(objektas);
    console.log(naujasObjektas);
  });
}

const automobiliai = [
  {
    rida: 120000,
    marke: 'Toyota',
    modelis: 'Corolla',
    metai: 2015,
    kaina: 9000,
  },

  { rida: 80000, marke: 'Honda', modelis: 'Civic', metai: 2018, kaina: 12000 },

  { rida: 50000, marke: 'Ford', modelis: 'Focus', metai: 2020, kaina: 15000 },
];

iteruotiPerObjektus(automobiliai, atrinktiMarkeModeli);

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
//  arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
//  naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
//  paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
//  kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
//  naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

function checkUserLogin(isUserLogedIn) {
  return new Promise((resolve, reject) => {
    if (isUserLogedIn) {
      resolve('User is logged in.');
    } else {
      reject('User is not logged in.');
    }
  });
}

checkUserLogin(true)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

checkUserLogin(false)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

async function checkDriversAge(age) {
  if (age >= 18) {
    // resolve
    return 'Vairuotojas yra pilnametis.';
  } else {
    // reject
    throw new Error('Vairuotojas yra nepilnametis.');
  }
}
checkDriversAge(18)
  .then((message) => {
    console.log('Vairuotojas gali vairuoti:', message);
  })
  .catch((error) => {
    console.log('Vairuotojas negali vairuoti:', error);
  });
