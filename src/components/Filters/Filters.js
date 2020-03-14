import React from 'react';
import PropTypes from 'prop-types';
import Specializations from '../Specializations';

function Filters({ specializations, setSpecializations, getSpecializations }) {
  return (
    <div>
      <Specializations
        specializations={specializations}
        onSelect={setSpecializations}
        getItems={getSpecializations}
        label='Выбрать специализацию'
        placeholder='Специализация'
      ></Specializations>
    </div>
  );
}

Filters.propTypes = {
  specializations: PropTypes.object.isRequired,
  setSpecializations: PropTypes.func.isRequired,
  getSpecializations: PropTypes.func.isRequired,
};

export default Filters;
