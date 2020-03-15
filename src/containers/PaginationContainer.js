import React from 'react';
import { connect } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';

import { getVacancies } from '../actions/vacancies';

function PaginationContainer({ filters, found, pages, page, getVacancies }) {
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

const mapStateIntoProps = ({ filters, vacancies }) => {
  const { page, pages, found } = vacancies;
  return {
    filters,
    pages,
    page,
    found
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    getVacancies: (filters) => {
      dispatch(getVacancies(filters));
    },
  };
};

export default connect(
  mapStateIntoProps,
  mapDispatchIntoProps,
)(PaginationContainer);
