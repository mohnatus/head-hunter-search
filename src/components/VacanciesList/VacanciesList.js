import React from 'react';
import PropTypes from 'prop-types';

import Vacancy from '../Vacancy';
import Pagination from '@material-ui/lab/Pagination';

function VacanciesList({ vacancies, onPageChange }) {
  const { loading, touched, items, pages, page } = vacancies;
  if (loading) return <div>Loading...</div>;

  if (!touched) return null;

  if (!items.length) return <div>Nothing found...</div>;

  const pageChangeHandler = (_, page) => onPageChange(page - 1);

  return (
    <>
      <div>
        {items.map((vacancy) => {
          return <Vacancy {...vacancy} key={vacancy.id} />;
        })}
      </div>

      <Pagination
        count={pages}
        page={page + 1}
        onChange={pageChangeHandler}
        color={'primary'}
        shape={'rounded'}
      />
    </>
  );
};

VacanciesList.propTypes = {
  vacancies: PropTypes.shape({
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
  }).isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default VacanciesList;
