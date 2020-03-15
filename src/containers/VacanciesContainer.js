import React from 'react';
import { connect } from 'react-redux';

import Vacancy from '../components/Vacancy';

function VacanciesContainer({ vacancies }) {
  const { loading, touched, items } = vacancies;

  if (loading) return <div>Loading...</div>;

  if (!touched) return null;

  if (!items.length) return <div>Nothing found...</div>;

  return (
    <div>
      {items.map((vacancy) => {
        return <Vacancy {...vacancy} key={vacancy.id} />;
      })}
    </div>
  );
}

const mapStateIntoProps = ({ vacancies }) => {
  return {
    vacancies,
  };
};

export default connect(mapStateIntoProps)(VacanciesContainer);
