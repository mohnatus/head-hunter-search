import React from 'react';
import PropTypes from 'prop-types';


function Vacancy({ id }) {

  return (
    <div>

        { id }



    </div>
  );
};

Vacancy.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Vacancy;
