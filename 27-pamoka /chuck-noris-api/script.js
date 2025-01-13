const loader = document.getElementById('loader');
const jokeElement = document.getElementById('joke');

function fetchJoke() {
  loader.style.display = 'block';
  jokeElement.textContent = '';

  fetch('https://api.chucknorris.io/jokes/random')
    // .json() yra metodas kuris pavercia response i json objekta
    .then((response) => response.json())
    // .then() sekmes atveju grazina data
    .then((data) => {
      console.log(data.value);
      jokeElement.textContent = data.value;
    })
    // .catch() klaidos atveju grazina error
    .catch((error) => {
      console.log('Error fetching joke', error);
    });
}
