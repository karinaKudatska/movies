import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters';
import Movies from './components/Movies/Movies';
import Popup from './components/Popup/Popup';
import BasicPagination from './components/Pagination/Pagination';
import movieImage from './images/movie.png';
import './App.scss';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [moviesCount, setMoviesCount] = useState(0);
  const [page, setPage] = useState(1);
  const pagesCount = Math.floor(moviesCount / 20);
  const [popup, setPopup] = useState(false);
  const [checkedMovie, setCheckedMovie] = useState(null);
  const [filter, setFilter] = useState('');
  const [filterUrl, setFilterUrl] = useState('');

  const filters = {
  popular: `sort_by=popularity.desc`,
  higestRated: `certification_country=US&certification=R&sort_by=vote_average.desc`,
  forKids: `certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  from2010: `primary_release_year=2010&sort_by=vote_average.desc`,
  dramas: `with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`
  }

  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = `&api_key=84c83a42cc97b70eee49a6cc6866a082`;

  useEffect(() => {
    if(localStorage.getItem("query")) {
      setQuery(JSON.parse(localStorage.getItem("query")));
      setMovies(findMovies(JSON.parse(localStorage.getItem("query"))));
    } else if (localStorage.getItem("filter")) {
      setFilter(JSON.parse(localStorage.getItem("filter")));
      setMovies(filterMovies(JSON.parse(localStorage.getItem("filter"))));
    }
  }, []);
  
  useEffect(() => {
    findMovies(query, page);
  }, [page]);
  
  useEffect(() => {
    filterMovies(filterUrl);
    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.removeItem("query");
  }, [filterUrl]);

  const findMovies = (query, page) => {
    fetch(`${BASE_URL}/search/movie?${API_KEY}&query=${query}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setMoviesCount(data.total_results);
      })
  }

  const filterMovies= (filterUrl) => {
    fetch(`${BASE_URL}/discover/movie?${filterUrl}${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }

  const chooseFilter = (event) => {
    setFilter(event.target.value);
    setFilterUrl(filters[event.target.value]);
    setQuery('');
  };

  const nextPage = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    findMovies(query, page);
    localStorage.setItem("query", JSON.stringify(query));
    localStorage.removeItem("filter");
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
    setFilter('');
  };

  const showPopup = (id) => {
    setCheckedMovie(movies.filter(movie => movie.id === id));
    setPopup(true);
  }

  const hidePopup = () => {
    setPopup(false);
  }

  return (
    <div className="App">
      <Header />

      <div className="App__forms">
        <Search 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          query={query}
        />

        <img className="App__forms-image" src={movieImage} alt="movie"/>

        <Filters 
          chooseFilter={chooseFilter}
          filter={filter}
        />
      </div>

      <Movies 
        movies={movies}
        showPopup={showPopup}
      />

      {moviesCount > 20 && (
        <BasicPagination
          page={page}
          pagesCount={pagesCount}
          nextPage={nextPage}
        />
      )}

      {popup && (
        <Popup 
          checkedMovie={checkedMovie[0]}
          hidePopup={hidePopup}
        />
      )}
    </div>
  );
}

export default App;
