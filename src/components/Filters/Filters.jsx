import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Filters = ({ chooseFilter, filter }) => {

  return (
    <div className="filters">
      <FormControl className="filters__form" color="secondary">
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={chooseFilter}
        >
          <MenuItem value={'popular'}>Most popular</MenuItem>
          <MenuItem value={'higestRated'}>Highest rated</MenuItem>
          <MenuItem value={'forKids'}>Most popular for kids</MenuItem>
          <MenuItem value={'from2010'}>Best movies from 2010</MenuItem>
          <MenuItem value={'dramas'}>Best drama's</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

Filters.propTypes = {
  chooseFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Filters;