import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import SpecializationsDialog from '../SpecializationsDialog';

function Specializations({
  items, loading, error,
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
      <div></div>
      <Button color='primary' variant='text' onClick={clickHandler}>
        Выбрать специализацию
      </Button>

      {isOpen ? (
        <SpecializationsDialog items={items} selected={selected} loading={loading} error={error} onClose={closeHandler} onChange={onChange} />
      ) : null}
    </div>
  );
}

Specializations.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,

  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  getSpecializations: PropTypes.func.isRequired,
};

export default Specializations;
