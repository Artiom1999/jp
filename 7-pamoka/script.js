// Uzduoys kepykla

let darboValandos = 8;

let iskepaKepaluPerValandaVienasDarbuotojas = 5;
let dabuotojuSkaicius = 6;
let vienoKepaloSavikaina = 2;
let vienoKepaloPardavimoKaina = 4;
let dienosUzsakymas = 60;

// Darbuotojai iskepa kepalu per diena
let iskepaKepaluPerDiena =
  iskepaKepaluPerValandaVienasDarbuotojas * dabuotojuSkaicius * darboValandos;

// Savikaina visu iskeptu kepalu per visa diena.
let visuKepaluSavikaina = vienoKepaloSavikaina * iskepaKepaluPerDiena;

// Pajamos pardavus visus kepalus per diena.
let pajamosPardavusKepalus = vienoKepaloPardavimoKaina * iskepaKepaluPerDiena;

// Gautas pelnas is parduotu kepalu per visa diena.
let gautasPelnas = pajamosPardavusKepalus - visuKepaluSavikaina;

// uzsakymo pajamos, savikaina ,pelanas.
let uzsakymoPajamos = dienosUzsakymas * vienoKepaloPardavimoKaina;
let uzsakymoSavikaina = dienosUzsakymas * vienoKepaloSavikaina;
let uzsakymoPelnas = uzsakymoPajamos - uzsakymoSavikaina;

// 1.
console.log(
  `Per viena darbo diena kepykla iskeps: ${iskepaKepaluPerDiena} kepalu`
);

// 2.
console.log(`Per diena iskeptu kepalu savikaina: ${visuKepaluSavikaina} euru`);
console.log(`Per diena gaunamos pajamos: ${pajamosPardavusKepalus} euru`);
console.log(`Per diena gautas pelanas: ${gautasPelnas} euru`);

// 3.

if (iskepaKepaluPerDiena > dienosUzsakymas) {
  console.log('kepykla spes iskepti: 60 kepalu');
}

// 4.

console.log(`Uzsakymo pajamos butu: ${uzsakymoPajamos} euru`);
console.log(`Uzsakymo pelnas butu: ${uzsakymoPelnas} euru`);

// utvirtinimo-uzdaviniai-10.js

// 1.Užduotis: Kurjerio pristatymo patikrinimas

// Įsivaizduokite, kad kuriame kurjerio pristatymo sistemą, kuri patikrina, ar užsakymas bus pristatytas tą pačią dieną.
// Pristatymas tą pačią dieną galimas tik tuo atveju, jei užsakymas buvo pateiktas iki tam tikros valandos (pvz., iki 15h) ir jei prekė yra sandėlyje.

let uzsakymoLaikas = 15;
let prekeYraSandelyje = true;

if (uzsakymoLaikas > 13 && prekeYraSandelyje) {
  console.log('preke yra sandelyje');
} else {
  console.log('prekes nera sandelyje');
}

// 2. Užduotis: Amžiaus kategorijos nustatymas

// Parašykime programą, kuri pagal žmogaus amžių nustato jo amžiaus kategoriją: vaikas, paauglys, suaugęs ar senjoras.
// Taisyklės:

// Jei amžius mažesnis nei 13, žmogus yra vaikas.
// Jei amžius tarp 13 ir 17 (imtinai), žmogus yra paauglys.
// Jei amžius tarp 18 ir 64 (imtinai), žmogus yra suaugęs.
// Jei amžius 65 ar daugiau, žmogus yra senjoras.

let amzius = 55;

if (amzius <= 13) {
  console.log('žmogus yra vaikas');
} else if (amzius >= 13 && amzius <= 17) {
  console.log('žmogus yra paauglys');
} else if (amzius >= 18 && amzius <= 64) {
  console.log('žmogus yra suaugęs');
} else if (amzius >= 65) {
  console.log('žmogus yra senjoras');
}

// 3️. Užduotis: Kavinės nuolaidų sistema

// Įsivaizduokite, kad kuriame nuolaidų sistemą kavinei. Priklausomai nuo kliento statuso (pvz., ar jis yra lojalumo programos narys) ir pirkinio sumos, gali būti pritaikoma skirtinga nuolaida.

// Taisyklės:
// Jei klientas yra lojalumo narys ir pirkinio suma yra daugiau nei 20 eurų, jis gauna 20% nuolaidą.
// Jei klientas nėra lojalumo narys, bet pirkinio suma viršija 50 eurų, jis gauna 10% nuolaidą.
// Jei nei viena iš sąlygų netenkinama, nuolaida nepritaikoma.

let pirkinioSuma = 16;
let lojalumoNarys = false;

if (lojalumoNarys && pirkinioSuma > 20) {
  console.log('jis gauna 20% nuolaidą.');
} else if (!lojalumoNarys && pirkinioSuma > 50) {
  console.log('jis gauna 10% nuolaidą.');
} else {
  console.log('nuolaida nepritaikoma.');
}

// 4️. Užduotis: Sporto klubo abonemento kaina

// Sporto klubas siūlo nuolaidas abonementams, priklausomai nuo lankytojo amžiaus ir ar jis studentas.
// Taisyklės:

// Jei lankytojas yra jaunesnis nei 18 metų arba studentas, jis gauna 15% nuolaidą.
// Jei lankytojas vyresnis nei 60 metų, jam taip pat taikoma 15% nuolaida.
// Kitais atvejais nuolaida netaikoma.

let lankytojoAmzius = 61;
let studentas = true;

if (lankytojoAmzius < 18 && studentas) {
  console.log('gauna 15% nuolaidą.');
} else if (lankytojoAmzius > 60) {
  console.log('gauna 15% nuolaidą.');
} else console.log('nuolaida netaikoma.');

// 5️. Užduotis: Egzamino įvertinimas pagal balą

// Parašykime programą, kuri pagal surinktą balą nustato, kokį įvertinimą gauna mokinys. Ši užduotis padės mokiniams suprasti, kaip veikia sąlygos ir diapazonai.
// Taisyklės:

// Jei balas yra nuo 90 iki 100, mokinys gauna įvertinimą „Puikiai“.
// Jei balas yra nuo 75 iki 89, įvertinimas yra „Gerai“.
// Jei balas yra nuo 50 iki 74, įvertinimas yra „Patenkinamai“.
// Jei balas yra mažesnis nei 50, įvertinimas yra „Nepatenkinamai“.

let balas = 40;

if (balas >= 90 && balas <= 100) {
  console.log('Puikiai');
} else if (balas >= 75 && balas <= 89) {
  console.log('Gerai');
} else if (balas >= 50 && balas <= 74) {
  console.log('Patenkinamai');
} else if (balas < 50) {
  console.log('Nepatenkinimai');
}

// 6️. Užduotis: Kino bilietų kainos nustatymas

// Parašykite programą, kuri apskaičiuoja kino bilieto kainą, atsižvelgiant į lankytojo amžių ir seanso laiką.

// Jei lankytojas yra vaikas (mažiau nei 12 metų), bilieto kaina yra 5 eurai.
// Jei lankytojas yra suaugęs ir eina į dienos seansą (iki 17 val.), bilieto kaina yra 7 eurai.
// Jei lankytojas yra suaugęs ir eina į vakarinį seansą (nuo 17 val.), bilieto kaina yra 10 eurų.
// Jei lankytojas yra senjoras (daugiau nei 65 metų), bilieto kaina yra 6 eurai.

let lakytojoMetai = 18;
let sensoLaikas = 18;

if (lakytojoMetai < 12) {
  console.log('bilieto kaina yra 5 eurai.');
} else if (lakytojoMetai > 12 && sensoLaikas < 17) {
  console.log('bilieto kaina yra 7 eurai.');
} else if (lakytojoMetai > 12 && sensoLaikas > 17) {
  console.log('bilieto kaina yra 10 eurų.');
} else if (lakytojoMetai >= 65) {
  console.log('bilieto kaina yra 6 eurai.');
}

// 7️. Užduotis: Atsiskaitymo su nuolaida sistema

// Sukurkite programą, kuri apskaičiuoja galutinę pirkimo sumą, pritaikant nuolaidas pagal savaitės dieną ir pirkinio sumą.

// Jei pirkimo suma viršija 100 eurų ir šiandien yra trečiadienis, taikoma 15% nuolaida.
// Jei pirkimo suma viršija 50 eurų ir šiandien yra penktadienis, taikoma 10% nuolaida.
// Kitais atvejais nuolaida netaikoma.

let pirkimoSuma = 40;
let yraTreciadienis = true;
let yraPenktadienis = false;

if (pirkimoSuma > 100 && yraTreciadienis) {
  console.log('taikoma 15% nuolaida.');
} else if (pirkimoSuma > 50 && yraPenktadienis) {
  console.log('taikoma 10% nuolaida');
} else {
  console.log('nuolaida netaikoma.');
}

// 8️. Užduotis: Laikmatis darbo laiko patikrinimui

// Parašykite programą, kuri patikrina, ar įvestas laikas yra darbo laikas.

// Darbo laikas: nuo 9:00 iki 17:00.
// Jei laikas patenka į darbo laiką, programa turi grąžinti pranešimą „Dabar darbo laikas“.
// Jei laikas nepatenka į darbo laiką, programa turi grąžinti pranešimą „Dabar ne darbo laikas“.

darboLaikas = 15;

if (darboLaikas >= 9 && darboLaikas <= 17) {
  console.log('Dabar darbo laikas');
} else {
  console.log('Dabar ne darbo laikas');
}

// 9️. Užduotis: Mokesčių apskaičiavimas pagal pajamas

// Sukurkite programą, kuri apskaičiuoja mokesčius pagal gyventojo pajamas.

// Jei pajamos yra mažesnės nei 10,000 eurų per metus, mokestis yra 5%.
// Jei pajamos yra tarp 10,000 ir 30,000 eurų, mokestis yra 10%.
// Jei pajamos yra tarp 30,000 ir 60,000 eurų, mokestis yra 15%.
// Jei pajamos yra daugiau nei 60,000 eurų, mokestis yra 20%.

let gyvetojoPajamos = 60001;

if (gyvetojoPajamos < 10000) {
  console.log('mokestis yra 5%.');
} else if (gyvetojoPajamos > 10000 && gyvetojoPajamos < 30000) {
  console.log('mokestis yra 10%.');
} else if (gyvetojoPajamos > 30000 && gyvetojoPajamos < 60000) {
  console.log('mokestis yra 15%.');
} else if (gyvetojoPajamos > 60000) {
  console.log('mokestis yra 20%.');
}

// 10. Užduotis: Bibliotekos knygų skolinimo trukmės patikrinimas

// Parašykite programą, kuri nustato, ar knygos skolinimosi trukmė yra leistina, priklausomai nuo skaitytojo statuso.

// Jei skaitytojas yra studentas, jis gali skolintis knygą 30 dienų.
// Jei skaitytojas yra mokytojas, jis gali skolintis knygą 60 dienų.
// Jei skaitytojas yra bibliotekos narys, bet nei studentas, nei mokytojas, jis gali skolintis knygą 14 dienų.
// Jei skaitytojas nėra bibliotekos narys, jis negali skolintis knygos.

let narisSudentas = false;
let narisMokytojas = false;
let bibliotekosNaris = false;

if (narisSudentas) {
  console.log('jis gali skolintis knygą 30 dienų.');
} else if (narisMokytojas) {
  console.log('jis gali skolintis knygą 60 dienų.');
} else if (bibliotekosNaris) {
  console.log('jis gali skolintis knygą 14 dienų.');
} else {
  console.log('negali skolintis knygos.');
}
