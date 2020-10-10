import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import Input from '@material-ui/core/Input';

const Search = ({ handleSubmit, handleChange, query }) => {

  return (
    <form 
      className="search" 
      noValidate 
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Input 
        className="search__input"
        placeholder="Enter a movie title!" 
        onChange={handleChange}
        value={query}
        color="secondary"
      />
    </form>
  );
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Search;