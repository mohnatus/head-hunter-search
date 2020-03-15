import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@material-ui/lab/Pagination';

VacanciesPagination.propTypes = {
  filters: PropTypes.any.isRequired,
  found: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getVacancies: PropTypes.func.isRequired,
};

function VacanciesPagination({ filters, found, pages, page, getVacancies }) {
  if (!found) return null;

  const pageChangeHandler = (_, page) => {
    getVacancies({
      ...filters,
      page: page - 1,
    });
  };

  return (
    <Pagination
      count={pages}
      page={page + 1}
      onChange={pageChangeHandler}
      color={'primary'}
      shape={'rounded'}
    />
  );
}

export default VacanciesPagination;
