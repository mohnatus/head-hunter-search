import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const currencies = ['RUR', 'EUR', 'USD'];

Salary.propTypes = {
  salary: PropTypes.number.isRequired,
  onlyWithSalary: PropTypes.bool.isRequired,
  currency: PropTypes.oneOf(currencies).isRequired,
  setSalary: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
  setOnlyWithSalary: PropTypes.func.isRequired,
};

function Salary({ salary, currency, setSalary, setCurrency, onlyWithSalary, setOnlyWithSalary }) {
  function salaryChangeHandler(event) {
    setSalary(parseInt(event.target.value));
  }

  function currencyChangeHandler(event) {
    setCurrency(event.target.value);
  }

  function onlyWithSalaryChangeHandler(event) {
    setOnlyWithSalary(event.target.checked);
  }

  return (
    <div>
      <div>
      <FormControl variant='outlined'>
        <Input
          variant='outlined'
          value={salary}
          onChange={salaryChangeHandler}
          type='number'
          inputProps={{ min: 0, step: 5000 }}
        />
      </FormControl>

      <FormControl variant='outlined'>
        <Select
          style={{ width: 100 }}
          labelId='currency-label'
          value={currency}
          onChange={currencyChangeHandler}
        >
          {currencies.map((cur) => {
            return (
              <MenuItem key={cur} value={cur}>
                {cur}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      </div>
      <div>
<input type="checkbox" value={onlyWithSalary} onChange={onlyWithSalaryChangeHandler} /> Только с зарплатой
        </div>
    </div>
  );
}

export default Salary;
