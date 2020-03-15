import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@material-ui/lab/Pagination';

function VacanciesPagination({ filters, found, pages, page, getVacancies }) {
  if (!found) return null;

  const pageChangeHandler = (_, page) => {
    getVacancies(filters, page);
  };

  return (
    <Pagination
      count={pages}
      page={page}
      onChange={pageChangeHandler}
      color={'primary'}
      shape={'rounded'}
    />
  );
}

VacanciesPagination.propTypes = {};

export default VacanciesPagination;
