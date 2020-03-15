import React from 'react';
import PropTypes from 'prop-types';

import Keywords from '../Keywords';
import Button from '@material-ui/core/Button';

import SpecializationsContainer from '../../containers/SpecializationsContainer';

Filters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string,
    specialization: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  setText: PropTypes.func.isRequired,
  setSpecialization: PropTypes.func.isRequired,
  getVacancies: PropTypes.func.isRequired,
}

function Filters({ filters, setText, setSpecialization, getVacancies }) {

  function applyFilters() {
    getVacancies(filters);
  }

  return (
    <div>
      <Keywords keywords={filters.text} onChange={setText} />
      <hr />
      <SpecializationsContainer
        selected={filters.specialization}
        onChange={setSpecialization}
      />
      <hr />
      <div style={{ marginTop: 20 }}>
        <Button color='primary' variant='contained' onClick={applyFilters}>
          Искать вакансии
        </Button>
      </div>
    </div>
  );
}

export default Filters;
