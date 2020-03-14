import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getSuggests } from './getSuggests';

function Keywords({ keywords, onChange }) {
  const [suggests, setSuggests] = useState([]);

  function inputChangeHandler(_, value) {
    onChange(value);

    if (value.length < 2) {
      setSuggests([]);
      return;
    }
    getSuggests(value).then((data) => setSuggests(data));
  }

  return (
    <Autocomplete
      id='vacancy-keywords'
      freeSolo
      inputValue={keywords}
      options={suggests}
      getOptionLabel={(option) => option.text}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Ключевые слова'
          margin='normal'
          variant='outlined'
        />
      )}
      onInputChange={inputChangeHandler}
    />
  );
}

Keywords.propTypes = {
  keywords: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Keywords;
