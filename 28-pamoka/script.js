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
    console.log(`Žodis "${string}" turi ilgį: ${ilgis}`);
  });
}

function koksIlgis(string) {
  return string.length;
}

const zodziai = ['obuolys', 'bananas', 'knyga', 'automobilis'];
patikrinkZodzioIlgi(zodziai, koksIlgis);
