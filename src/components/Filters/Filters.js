import React from 'react';
import PropTypes from 'prop-types';

import Keywords from '../Keywords';
import Salary from '../Salary';
import Button from '@material-ui/core/Button';

import SpecializationsContainer from '../../containers/SpecializationsContainer';

Filters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string,
    specialization: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  setText: PropTypes.func.isRequired,
  setSpecialization: PropTypes.func.isRequired,
  setSalary: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
  setOnlyWithSalary: PropTypes.func.isRequired,
  getVacancies: PropTypes.func.isRequired,
}

function Filters({ filters, setText, setSpecialization, setSalary, setCurrency, setOnlyWithSalary, getVacancies }) {

  function applyFilters() {
    getVacancies(filters);
  }

  return (
    <div>
      <Keywords keywords={filters.text} onChange={setText} />
      <hr />
      <Salary salary={filters.salary} currency={filters.currency} onlyWithSalary={filters.onlyWithSalary} setSalary={setSalary} setCurrency={setCurrency} setOnlyWithSalary={setOnlyWithSalary} />
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
