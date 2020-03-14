import React from 'react';
import { connect } from 'react-redux';
import { getVacancies } from '../actions/search';
import Button from '@material-ui/core/Button';

function Search({ specializations, getVacancies }) {
  function clickHandler() {
    getVacancies({
      specialization: specializations.map(spec => spec.id)
    });
  }

  return (
    <div>
      <Button onClick={clickHandler}>Искать вакансии</Button>
    </div>
  );
}

const mapStateIntoProps = store => {
  return {
    specializations: store.specializations.selected
  }
}

const mapDispatchIntoProps = dispatch => {
  return {
    getVacancies: (params) => {
      dispatch(getVacancies(params))
    }
  }
}

export default connect(mapStateIntoProps, mapDispatchIntoProps)(Search);