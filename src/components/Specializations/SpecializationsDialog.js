import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

SpecializationsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function SpecializationsDialog({ onClose, children }) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby='specializations-dialog-title'
    >
      <DialogTitle id='specializations-dialog-title'>
        Выбрать специализации
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SpecializationsDialog;
