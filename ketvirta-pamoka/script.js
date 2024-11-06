// Palyginimo operatoriai

// == Palyginimas su konvertavimu  (konvertuoja tipus ne reiksmes)

console.log(2 == 2); // true
console.log('2' == 2); // true
console.log(0 == false); // true
console.log('Edgaras' == 'edgaras'); // false

// === palyginimas be konvertavimo (strict comparison)
// Turime lyginti ne tik reiksmes, bet ir ju tipus

console.log(2 === 2); // true
console.log(2 === 1); // false
console.log(2 === '2'); // false
console.log('Edgaras' === 'edgaras'); // false
console.log('Edgaras' === 'Edgaras'); // true

// !=Nelygu
// su vienu = konvertuoja tipus

console.log(2 != 2); //false
console.log(2 != '2'); //false

//!== Nelygu be konvertavimo

console.log(2 !== 2); //false
console.log(2 !== '2'); //true

// > Daugiau

console.log(2 > 1); //true
console.log(2 > 3); //false

// >= Daugiau arba lygu

console.log(2 >= 2); //true

// Maziau

console.log(2 < 3); //true
console.log(2 < 2); //false

//Maziau arba lygu

console.log(2 <= 2); // true
console.log(2 <= 1); // false
