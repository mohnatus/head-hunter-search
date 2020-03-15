import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';



import CheckboxTree from '../CheckboxTree';

function SpecializationsDialog({
  items,
  loading,
  error,
  selected,
  onChange,
  onClose,
  onGroupToggle,
  onItemToggle
}) {
  const [open, setOpen] = useState([]);

  console.log('dialog', selected)

  function toggleGroupView(groupId) {
    const openSet = new Set(open);
    if (openSet.has(groupId)) openSet.delete(groupId);
    else openSet.add(groupId);
    setOpen([...openSet]);
  }

  function getContent() {
    if (loading) return <CircularProgress />;
    if (error) return <div>{error}</div>;

    const config = {
      getLabel: item => item.name,
      getValue: item => item.id,
      getChildren: item => item.specializations
    };

    return (
      <CheckboxTree items={items} checked={selected} config={config} onChange={onChange} />
    );
  }

  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby='specializations-dialog-title'
    >
      <DialogTitle id='specializations-dialog-title'>
        Выбрать специализации
      </DialogTitle>
      <DialogContent>{getContent()}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SpecializationsDialog.propTypes = {
  list: PropTypes.shape({
    groups: PropTypes.array.isRequired,
    toggleGroup: PropTypes.func.isRequired,
    toggleItem: PropTypes.func.isRequired
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SpecializationsDialog;
