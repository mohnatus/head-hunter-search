import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import SpecializationsDialog from './SpecializationsDialog'
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckboxTree from '../CheckboxTree';
import { declOfNum } from '../../utils/declOfNum';

const checkboxTreeConfig = {
  getLabel: (item) => item.name,
  getValue: (item) => item.id,
  getChildren: (item) => item.specializations,
};

Specializations.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,

  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  getSpecializations: PropTypes.func.isRequired,
};

function Specializations({
  items,
  loading,
  error,
  selected,
  onChange,
  getSpecializations,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    if (!items.length && !loading && !error) getSpecializations();
    setIsOpen(true);
  }

  function closeHandler() {
    setIsOpen(false);
  }

  return (
    <div>
      Выбрано: {selected.length} {declOfNum(selected.length, ['специализация', 'специализации', 'специализаций'])}

      <br />
      <Button color='primary' variant='text' onClick={clickHandler}>
        Выбрать специализацию
      </Button>

      {isOpen ? (
        <SpecializationsDialog onClose={closeHandler}>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <CheckboxTree
              items={items}
              checked={selected}
              config={checkboxTreeConfig}
              onChange={onChange}
            />
          )}
        </SpecializationsDialog>
      ) : null}
    </div>
  );
}

export default Specializations;
