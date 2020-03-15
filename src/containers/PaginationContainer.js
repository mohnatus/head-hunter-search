import React from 'react';
import { connect } from 'react-redux';

import { getVacancies } from '../actions/vacancies';
import VacanciesPagination from '../components/VacanciesPagination';

function PaginationContainer(props) {
  return <VacanciesPagination {...props} />;
}

const mapStateIntoProps = ({ filters, vacancies }) => {
  const { page, pages, found } = vacancies;
  return {
    filters,
    pages,
    page,
    found,
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
