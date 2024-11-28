// Kitamieji (variables)

//Kitamasis - atminties vieta ,kurioje saugoma informacija

//1. let -kintamasis, kurio reiksme gali buti keiciama
let amzius = 26;

console.log('Artiom' + ' ' + 'Mano amzius' + amzius);

amzius = 27;

console.log('Artiom' + ' ' + 'Mano amzius' + amzius);

// 2.const -kintamasis, kurio reiksmes keisti negalima

const vardas = 'Jonas';

//Negalima redeklaruot konstantos reiksmes!
//vardas = 'Petras';

console.log('Mano vardas:' + vardas);

// 3. var - senas budas kurti kintamuosius
var pavarde = 'Petraitis';

pavarde = 'Jonaitis';

console.log('Mano pavarde' + pavarde);

// Patikrina duomenu tipa
console.log(typeof vardas);
