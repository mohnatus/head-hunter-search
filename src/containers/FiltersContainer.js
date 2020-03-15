import React from 'react';
import { connect } from 'react-redux';

import Filters from '../components/Filters';

import { setText, setSpecialization, setSalary, setCurrency, setOnlyWithSalary } from '../actions/filters';
import { getVacancies } from '../actions/vacancies';

function FiltersContainer(props) {
  return (
    <Filters {...props} />
  );
}

const mapStateIntoProps = ({ filters }) => {
  return {
    filters,
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    setText: (keywords) => {
      dispatch(setText(keywords));
    },

    setSalary: (salary) => {
      dispatch(setSalary(salary));
    },

    setOnlyWithSalary: (salary) => {
      dispatch(setOnlyWithSalary(salary));
    },

    setCurrency: (currency) => {
      dispatch(setCurrency(currency));
    },

    setSpecialization: (specializations) => {
      console.log('set specs', specializations)
      dispatch(setSpecialization(specializations));
    },

    getVacancies: (filters) => {
      dispatch(getVacancies(filters));
    },
  };
};

export default connect(
  mapStateIntoProps,
  mapDispatchIntoProps,
)(FiltersContainer);
