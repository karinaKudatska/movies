import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import './Pagination.scss';

const BasicPagination = ({ pagesCount, nextPage }) => {
  return (
    <div className="pagination">
      <Pagination count={pagesCount} onClick={(event) => nextPage(event.target.innerText)} />
    </div>
  );
}

BasicPagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired
}

export default BasicPagination;