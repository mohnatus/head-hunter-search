import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from '@material-ui/core/Link';

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
    <>
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
    <div>
      <Link color="primary" underline="always" href="https://hh.ru/article/1175" target="_blank" rel="noopener noreferrer">Описание языка поисковых запросов</Link>
    </div>
    </>
  );
}

Keywords.propTypes = {
  keywords: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Keywords;
