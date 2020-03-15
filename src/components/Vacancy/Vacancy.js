import React from 'react';
import PropTypes from 'prop-types';

function Vacancy({ id, name, alternate_url }) {
  return (
    <div>
      <a href={alternate_url} target='_blank' rel="noopener noreferrer">
        {name}
      </a>
    </div>
  );
}

Vacancy.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Vacancy;
