import React from 'react';
import PropTypes from 'prop-types';

import Vacancy from '../Vacancy';

VacanciesList.propTypes = {
  vacancies: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  })
};

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



export default VacanciesList;
