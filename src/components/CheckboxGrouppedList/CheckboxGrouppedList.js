import React, { useState } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function CheckboxGrouppedList({ groups, onChange }) {
  const collapsed = groups.reduce((acc, group) => {
    return {
      ...acc,
      [group.id]: true,
    };
  }, {});
  const [groupsCollapsed, setGroupsCollapsed] = useState(collapsed);
  const [checked, setChecked] = useState([]);

  function getItemsByGroup(groupId) {
    let group = groups.find((g) => g.id === groupId);
    if (!group) return [];

    return group.items.map((i) => i.id);
  }

  function toggleGroupHandler(groupId) {
    const index = checked.indexOf(groupId);
    if (index === -1) {
      setChecked([...checked, groupId]);
    } else {
      setChecked([...checked].splice(index, 1));
    }
  }

  function toggleItemHandler(groupId, itemId) {
    return () => {};
  }

  function expandGroupHandler(groupId) {
    setGroupsCollapsed({
      ...groupsCollapsed,
      [groupId]: !groupsCollapsed[groupId],
    });
  }

  return (
    <List className='groupped-list'>
      {groups.map((group) => {
        const isCollapsed = groupsCollapsed[group.id];
        const isChecked = checked.indexOf(group.id) !== -1;

        return (
          <div key={group.id}>
            <ListItem
              className='groupped-list__title'
              data-group={group.id}
              onClick={toggleGroupHandler}
            >
              <ListItemIcon>
                <Checkbox edge='start' checked={isChecked} />
              </ListItemIcon>
              <ListItemText primary={group.name} />
              <ListItemSecondaryAction
                onClick={() => expandGroupHandler(group.id)}
              >
                {isCollapsed ? <ExpandLess /> : <ExpandMore />}
              </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={isCollapsed} className='groupped-list__group'>
              {isCollapsed
                ? null
                : group.items.map((item) => {
                    return (
                      <ListItem
                        key={item.id}
                        className='groupped-list__item'
                        onClick={toggleItemHandler(group.id, item.id)}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            checked={checked.indexOf(item.id) !== -1}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItem>
                    );
                  })}
            </Collapse>
          </div>
        );
      })}
    </List>
  );
}

CheckboxGrouppedList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            .isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxGrouppedList;
