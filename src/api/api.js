const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `&api_key=84c83a42cc97b70eee49a6cc6866a082`;

export const findMovies = (query, page) => {
  fetch(`${BASE_URL}/search/movie?${API_KEY}&query=${query}&page=${page}`)
    .then(response => response.json());
}

export const filterMovies= (filter) => {
    fetch(`${BASE_URL}/discover/movie?${filter}${API_KEY}`)
      .then(response => response.json());
}