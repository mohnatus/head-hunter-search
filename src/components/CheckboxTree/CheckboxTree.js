import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CheckboxTreeWidget from 'react-checkbox-tree';
import SvgIcon from '@material-ui/core/SvgIcon';

import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Checkbox from '@material-ui/icons/CheckBox';
import CheckboxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckboxOutlinedTwoTone from '@material-ui/icons/CheckBoxOutlineBlankTwoTone';

CheckboxTree.propTypes = {

};

const defaultConfig = {
  getValue: (item) => item.value,
  getLabel: item => item.label,

  getChildren: item => item.children,
  sort: null,
}

function CheckboxTree({ items, checked = [], config = {}, onChange }) {
  console.log('tree checked', checked)
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

  console.log(2, nodes)

  const [ expanded, setExpanded ] = useState([]);

  function expandHandler(p) {
    console.log('exp', p)
    setExpanded(p)
  }

  console.log('checked', checked)

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
