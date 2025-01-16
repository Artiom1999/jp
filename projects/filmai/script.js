const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');

const fetchMovies = async () => {
  try {
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=gladiator'
    );
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};

fetchMovies();
