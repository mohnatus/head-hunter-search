import React from 'react';
import { connect } from 'react-redux';

import Keywords from '../components/Keywords';
import Button from '@material-ui/core/Button';

// import SpecializationsContainer from './SpecializationsContainer';

import { setText, setSpecialization } from '../actions/filters';
import { getVacancies } from '../actions/vacancies';

function FilterContainer({
  filters,
  setText,
  setSpecialization,
  getVacancies,
}) {
  function applyFilters() {
    getVacancies(filters);
  }

  return (
    <div>
      <Keywords keywords={filters.text} onChange={setText} />

      {/* <SpecializationsContainer selected={filters.specialization} onChange={setSpecialization} /> */}

      <div style={{ marginTop: 20 }}>
        <Button color='primary' variant='contained' onClick={applyFilters}>
          Искать вакансии
        </Button>
      </div>
    </div>
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

    setSpecialization: (specializations) => {
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
)(FilterContainer);
