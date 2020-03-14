import React from 'react';
import { connect } from 'react-redux';
import { getVacancies } from '../actions/search';
import Button from '@material-ui/core/Button';
import Vacancy from '../components/Vacancy';
import Pagination from '@material-ui/lab/Pagination';

function Search({ specializations, vacancies, getVacancies }) {
  const { items, pages, page, touched, loading } = vacancies;

  function updateList(page = 0) {
    getVacancies({
      specialization: specializations.map((spec) => spec.id),
      page,
    });
  }

  function clickHandler() {
    updateList();
  }

  const pageChangeHandler = (_, page) => {
    updateList(page - 1);
  };

  const getList = () => {
    if (loading) return <div>Loading...</div>
    if (!touched) return null;

    if (!items.length) return <div>Nothing found...</div>

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
    )
  }

  return (
    <>
      <div>
        <Button onClick={clickHandler}>Искать вакансии</Button>
      </div>

      { getList() }
    </>
  );
}

const mapStateIntoProps = (store) => {
  return {
    specializations: store.specializations.selected,
    vacancies: store.vacancies,
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    getVacancies: (params) => {
      dispatch(getVacancies(params));
    },
  };
};

export default connect(mapStateIntoProps, mapDispatchIntoProps)(Search);
