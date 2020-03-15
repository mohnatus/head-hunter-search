import React from 'react';
import { connect } from 'react-redux';
import VacanciesList from '../components/VacanciesList';



function VacanciesContainer(props) {
  return (
    <VacanciesList {...props} />
  )
}

const mapStateIntoProps = ({ vacancies }) => {
  return {
    vacancies,
  };
};

export default connect(mapStateIntoProps)(VacanciesContainer);
