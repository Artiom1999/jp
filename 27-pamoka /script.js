// // Async js

// // Asinchroninis kodas = nevykdomas pagal eile, o pagal ivykius kuriuosmes nustatome.
// // 1. Veiksmas
// console.log('Gryzau namo');
// // 2. Veiksmas
// console.log('Uzsisakiau Pica');
// // 3. Veiksmas
// // setTimeout - funkcija kuri paleidzia nurodyta koda po nurodyto laiko.
// // Netinka naudoti kai nezinome kada kodas turetu buti paleistas.
// setTimeout(() => {
//   console.log('Pica Atvyko!');
//   console.log('Pradejau valgyti pica');
// }, 2000);
// // 4. Veiksmas
// console.log('Nusimoviau batus');
// console.log('Nusimadziau');

// // API - Application Programming Interface
// // API - Programavimo sasaja, kuri leidzia mums naudotis kitu programu funkcijomis arba duomenimis.
// // PVZ -https://jsonplaceholder.typicode.com/todos/1

// // PROMISES
// // Promises - tai objektas, kuris leidzia tvarkyti asinchroninius veiksmus.
// // Jis veikia pagal pricipa: Laukia , kol veiksmas bus uzbaigtas
// // ir tada grazina rezultata arba klaida.
// // Promise buna trys busenos:
// // 1. Pending - laukia kol veiksmas bus uzbaigtas.
// // 2. fulfilled - veiksmas baigtas sekmingai.
// // 3. Rejected -veiksmas baigtas su klaida.

// PVZ

// Funkcija kuri imituos kavos uzsakyma.
const orderCoffee = (coffeeType) => {
  return new Promise((resolve, reject) => {
    console.log('Uzsakymas yra priimtas...');

    setTimeout(() => {
      if (coffeeType === 'Latte') {
        // Resolve - funkcija, kuri grazina sekminga rezultata.
        resolve('Latte yra parupsta');
      } else {
        // Reject - Funkcija kuri grazina klaida
        reject('Atsiprasome, bet siuo metu neturime sios kavos.');
      }
    }, 5000);
  });
};

// Galime naudot
orderCoffee('Latte')
  .then((message) => {
    // message - tai yr resolve funkcijos grazinimo rezultatas.
    console.log('Barista sako:', message);
  })
  .catch((error) => {
    // error - tai yra reject funkcijos grazin
    console.log('Barista sako:', error);
  });
