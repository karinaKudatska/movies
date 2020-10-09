import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './Pagination.scss';

const BasicPagination = ({ pagesCount, nextPage }) => {
  return (
    <div className='pagination'>
      <Pagination count={pagesCount} onClick={(event) => nextPage(event.target.innerText)} />
    </div>
  );
}

export default BasicPagination;