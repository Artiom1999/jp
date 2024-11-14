// 1. Uždavinys: Skaičių suma
// Sukurk tris kintamuosius su skaičiaus tipo reikšmėmis. Apskaičiuok jų sumą ir priskirk ją naujam kintamajam. Atspausdink rezultatą.

let a = 5;
let b = 10;
let c = 15;

let suma = a + b + c;

console.log(suma);

// 2. Uždavinys: Stačiakampio plotas
// Sukurk du kintamuosius - ilgis ir plotis, priskirk jiems bet kokias reikšmes ir apskaičiuok stačiakampio plotą.

let ilgis = 8;
let plotis = 5;

let plotas = ilgis * plotis;

console.log(`Plotas: ${plotas} cm`);

// 3. Uždavinys: Kvadrato plotas
// Sukurk kintamąjį ir priskirk jam bet kokį skaičių. Apskaičiuok kvadrato plotą ir jį atspausdink.

let krastine = 6;

let kvadratoPlotas = krastine * krastine;

console.log(`Kvadrato plotas: ${kvadratoPlotas} cm`);

//console.log(Ilgis * plotis);

// 4. Uždavinys: Vardo pasisveikinimas
// Sukurk kintamąjį vardas ir priskirk jam kokį nors vardą. Programa turi pasisveikinti su tuo vardu. Pvz.: “Labas, Vardeni”.

const vardas = 'Artiom';
const sakinys = `Labas, ${vardas}`;

console.log(sakinys);

// 5. Uždavinys: Dvigubas skaičius
// Sukurk kintamąjį skaicius, jam priskirk bet kokią skaitinę reikšmę. Programa turi atspausdinti dvigubą šio skaičiaus reikšmę.

let skaicius = 5;
let dvigubasSkaicius = skaicius * skaicius;

console.log('Dvigubas skaicius: ' + dvigubasSkaicius);

// 6. Uždavinys: Kūno masės indeksas
// Sukurk kintamuosius ūgis ir svoris. Parašyk programą, kuri apskaičiuoja kūno masės indeksą.

let ugis = 1.8;
let svoris = 60;
let kmi = svoris / (ugis * ugis);

console.log(`KMI ${kmi.toFixed(2)}`);

// 7. Uždavinys: Draugų skaičius
// Sukurk kintamąjį drauguSkaicius, kuriame bus saugomas tavo draugų skaičius. Parašyk programą, kuri prideda 5 naujus draugus ir atspausdina bendrą draugų skaičių.

let draugai = 1;
let naujiDraugai = 5;
let drauguSuma = draugai + naujiDraugai;

console.log(`Draugu skaicius: ${drauguSuma}`);

// 8. Uždavinys: Kavos užsakymas
// Sukurk kintamuosius kavosKiekis ir kavosKaina. Parašyk programą, kuri suskaičiuoja kavos užsakymo sumą ir ją atspausdina.

let kavosKiekis = 2;
let kavosKaina = 2.5;
let valiuta = 'Eurai';

let kavosUzsakymSuma = kavosKiekis * kavosKaina;

console.log(`Kavos uzsakymo suma: ${kavosUzsakymSuma} ${valiuta}`);

// 9. Uždavinys: PVM skaičiavimas
// Sukurk kintamuosius kainaBePVM ir pvm, kurie išsaugos prekės kainą ir PVM procentą (pvz., 21). Programa turi apskaičiuoti kainą su PVM.

let kainaBePVM = 100;
let pvmProcentai = 21;

let kainaSuPvm = kainaBePVM + kainaBePVM * (pvmProcentai / 100);

console.log(`Kaina su PVM: ${kainaSuPvm}`);

// 10. Uždavinys: Automobilio kuro sąnaudos
// Sukurk kintamuosius nuvaziuotiKm, kuroSanaudos ir kuroKaina. Parašyk programą, kuri apskaičiuoja kiek kainuos nukeliauti nuvaziuotiKm su šiuo automobiliu.

let nuvaziuotiKm = 80;
let kuroSanaudosSimtuKilometru = 6.5;
let kuroKaina = 1.5;

let kelionesKaina =
  (nuvaziuotiKm / 100) * kuroSanaudosSimtuKilometru * kuroKaina;

console.log(`Keliones kaina: ${kelionesKaina.toFixed(2)} ${valiuta}`);

// 11. Uždavinys: Metų skaičius mėnesiais.
// Sukurk kintamąjį metai, kuriame būtų saugomas skaičius, kiek metų. Programa turi apskaičiuoti, kiek tai sudaro mėnesių.

let metai = 1;
const menesiaiMetuose = 12;

console.log(metai * menesiaiMetuose);

// 12. Uždavinys: Temperatūros perskaičiavimas
// Parašyk programą, kuri konvertuoja temperatūrą iš Celsijaus į Farenheito skalę. Sukurk kintamąjį temperaturaC ir priskirk jam bet kokią reikšmę,
// o tada apskaičiuok temperatūrą Farenheito skalėje. Formulė: F = C * 9/5 + 32

let temperaturaC = 20;
let temperaturaF = (temperaturaC * 9) / 5 + 32;

console.log('Temperatura Farenheito skaleje: ' + temperaturaF + ' F');

//Pakelti kubu
let skaicius1 = 5;

console.log(skaicius1 ** 3);
