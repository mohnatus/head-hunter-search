import React from 'react';
import PropTypes from 'prop-types';

import Vacancy from '../Vacancy';

function VacanciesList({ vacancies }) {
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

VacanciesList.propTypes = {

};

export default VacanciesList;
