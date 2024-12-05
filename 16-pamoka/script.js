// Funkcijos
// Pvz

let automobilis = {
    marke: 'Toyota',
    modelis: 'Prius',
    kaina: 20000,
    nuolaidaProcentais: 10,
    automobilioKainaSuNuolaida: function() {
      let galutineKaina = this.kaina * (1 - this.nuolaidaProcentais / 100);
  
      return galutineKaina;
    }
  }
  
  console.log(`Automobilis kainuos su ${automobilis.nuolaidaProcentais}% nuolaida: ${automobilis.automobilioKainaSuNuolaida()}$`)

  // Pvz 2

  let kelione = {
    vieta: 'Paryzius',
    trukmeDienomis: 5,
    dienosBiudzetas: 100,
    apskaiciuotiVisaKelionesKaina: function() {
      let suma = this.trukmeDienomis * this.dienosBiudzetas;
      return suma;
    },
    parodykInformacija: function() {
      console.log(`Kelione i ${this.vieta}, truks ${this.trukmeDienomis} dienas, kainuos is viso: ${this.apskaiciuotiVisaKelionesKaina()}`)
    }
  }
  
  kelione.parodykInformacija();

// Funkcijos
// Skirtos atlikti veiksmus

// Si funkcija grazina suma, padavus du skiacius
// return zodis grazina reiksme.

// Funkcija pati savavališkai nevykdo jokio kodo, todėl norint, kad ji atliktų kokį nors darbą - reikės ją iškviesti.
// Jeigu funkcijai reikia kokių nors duomenų, jai tai galima perduoti kaip parametrus / argumentus.
// a ir b parametrai/argumentai

function sukaiciuokSuma(a, b) {
    return a + b;
}

const suma = sukaiciuokSuma(1, 2)

console.log(suma);

// Pvz.3

function pasisveikinimas(vardas)
    {
        console.log('Labas',vardas);
    }
 
    pasisveikinimas('Jonai');

// pvz.4

let laikas = '18:00';

function pasisveikink() {
  console.log('Labas rytas')
}

function atsisveikink() {
  console.log('Viso gero!')
}

if (laikas === '18:00') {
  atsisveikink()
} else {
  pasisveikink();
}

// pvz.5 
// funkcijos mato kintamuosius kurie yra isoreje

let skaicius = 10;

function isveskPadaugintaSkaiciu() {
  console.log(skaicius * 2);
}

isveskPadaugintaSkaiciu();

// Uzdaviniai (1/3)

// 1. Susikurkite funkcija,kuri isvestu jusu varda ir kodel pasirinkote programavima. 
// Iskvieskie funkcija tris kartus

function pasisveikinimas(vardas)
    {
        console.log('Labas',vardas,'-Pasirinkau programavima nes to labai norejau');
    }
 
    pasisveikinimas('Artiom');
    pasisveikinimas('Artiom');
    pasisveikinimas('Artiom');

// antra variantas

function isveskManoVarda(vardas, sakinys) {
    console.log(vardas, sakinys);
  }
  
  isveskManoVarda('Edgaras', 'nes patinka kompai')
  isveskManoVarda('Tomas', 'nes patinka $$$')
  isveskManoVarda('Tobis', 'Nes patinka logika')

// 2.Sukurkite funkcija kuri isvestu 5 eiluciu eilerasti. Iskvieskite sia funkcija 5 kartus.

function iskvieskEilerasti() {
    console.log('Du gaideliai,Du gaideliai');
  }
  
  for (let i = 0; i < 5; i++) {
    iskvieskEilerasti()
  }

// 3.

function iskvieskPirmaSakiny() {
    console.log('Pirmas sakinys')
  }
  
  function iskvieskAntraSakiny() {
    console.log('Antras sakinys')
  }
  
  function iskvieskTreciaSakiny(x) {
    console.log('Trecias sakinys', x)
  }
  
  iskvieskPirmaSakiny()
  iskvieskAntraSakiny()
  iskvieskTreciaSakiny('Edgaras')

  // 4

  function pirmaEilute() {
    return 'Labas';
  }
  
  function antraEilute() {
    return 'Vakaras'
  }
  
  function sujungtosEilutes() {
    console.log(pirmaEilute() + ' ' + antraEilute())
  }
  
  sujungtosEilutes();

  // 5

  function sugeneruokIrIsveskSuma() {
    const skaicius1 = Math.floor(Math.random() * 10) + 1;
    const skaicius2 = Math.floor(Math.random() * 10) + 1;
  
    let suma = skaicius1 + skaicius2;
  
    console.log(`${skaicius1} + ${skaicius2} = ${suma}`)
  }
  
  sugeneruokIrIsveskSuma()
  sugeneruokIrIsveskSuma()
  sugeneruokIrIsveskSuma()