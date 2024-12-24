// 2. Arrow funkcijos
// Arrow funkcijos yra trumpesnes ir patogesnes neisenosios funkcijos

// senoji funkcija

function add(a, b) {
  return a + b;
}
// Arrow funkcija, jei funkcija turi tik viena eilute, tai galima nerasyti {} ir return;
console.log(add(2, 3)); // 5

const multuply = (a, b) => a * b;

console.log(multuply(2, 3)); // 5

const greet = (name) => `Sveiki `;

// 3. Destructing assignments
// Destructing assignemnts leidzia iskartraukti kintamuosius is objekto arba masyvo

const user = {
  name: "Tomas",
  age: 25,
};

// Senuoju budu
const oldName = user.name;
const oldAge = user.age;

// Naujoju budu

const { name, age } = user;

console.log(name);
console.log(age);

// Masyvo atveju
const colors = ["red", "green", "blue"];
const [firstcolor, secondColor, thirdColor, fourthColor] = colors;

console.log(fourthColor); //undefined

// 4.Spread operator;
// ... operatorius leidzia isskaidyti masyvo arba objekto turini, ir leidzia pripildyti naujomis reiksmemis.

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// 5. Default parametrai
// Default parametrai leidzia nurodyti kintamojo reiksme, jei ji nebuvo suteikta;

const pasisveikinimas = (name = "Vartotojas") => {
  console.log("Sveiki!", name);
};

const calculate = (a = 2, b = 3) => a * b;

console.log(calculate()); // 6
console.log(calculate(3, 4)); // 12
