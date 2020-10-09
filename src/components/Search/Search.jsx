import React from 'react';
import './Search.scss';
import Input from '@material-ui/core/Input';

export default function Inputs({ handleSubmit, handleChange, query }) {

  return (
    <form 
        className='search' 
        noValidate 
        autoComplete="off"
        onSubmit={handleSubmit}
    >
        <Input 
            className='search__input'
            placeholder="Enter a movie title!" 
            onChange={handleChange}
            value={query}
        />
    </form>
  );
}