import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultConfig } from './defaultConfig';
import CheckboxTreeWidget from 'react-checkbox-tree';

import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Checkbox from '@material-ui/icons/CheckBox';
import CheckboxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckboxOutlinedTwoTone from '@material-ui/icons/CheckBoxOutlineBlankTwoTone';

CheckboxTree.propTypes = {
  items: PropTypes.array.isRequired,
  checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  config: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

function CheckboxTree({ items, checked = [], config = {}, onChange }) {
  const settings = {
    ...defaultConfig,
    ...config,
  }

  function checkHandler(checked) {
    onChange(checked);
  }

  const renameLvl = (items) => {
    if (!items) return null;
    if (!items.length) return [];

    if (typeof settings.sort === 'function') items.sort(settings.sort);

    return items.map(item => {
      const value = settings.getValue(item);
      const label = settings.getLabel(item);

      let children = renameLvl(settings.getChildren(item));

      return {
        value,
        label,
        children
      }
    })
  }

  const nodes = renameLvl([...items]);
  const [ expanded, setExpanded ] = useState([]);

  return (
    <CheckboxTreeWidget
      nodes={nodes}
      checked={checked}
      onCheck={checkHandler}
      expanded={expanded}
      onExpand={setExpanded}
      icons={{
        check: <Checkbox  />,
        uncheck: <CheckboxOutlineBlank />,
        halfCheck: <CheckboxOutlinedTwoTone  />,
        expandClose: <ArrowRight />,
        expandOpen: <ArrowDown />,
        expandAll: '',
        collapseAll: '',
        parentClose: '',
        parentOpen: '',
        leaf: '',
      }}
    />
  );
}

export default CheckboxTree;
