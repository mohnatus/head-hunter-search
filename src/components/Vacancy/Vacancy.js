import React from 'react';
import PropTypes from 'prop-types';

function getSalary(salary) {
  return `${salary.from ? 'от ' + salary.from : ''} ${
    salary.to ? 'до ' + salary.to : ''
  } ${salary.currency}`;
}

function Vacancy(vacancy) {
  const { name, alternate_url, salary, area } = vacancy;

  return (
    <div style={{ marginBottom: 20 }}>
      <a href={alternate_url} target='_blank' rel='noopener noreferrer'>
        {name}
        <br />
        <strong>{salary ? getSalary(salary) : 'Зарплата не указана'}</strong>
      </a>
    </div>
  );
}

Vacancy.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Vacancy;
