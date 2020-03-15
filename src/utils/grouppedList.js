const defaultConfig = {
  getGroupItems: (group) => group.items,
  onChange: () => {},
  sortGroups: (a, b) => a.id - b.id,
  sortItems: (a, b) => a.id - b.id,
}

export default class GrouppedList {
  constructor(groups, defaultSelected = [], config = {}) {
    this.config = {...defaultConfig, config};
    console.log(this.config.getGroupItems)
    this._groups = this._init(groups, defaultSelected);

    console.log(this._groups)
  }

  _init(groups, defaultSelected) {
    debugger
    const { sortGroups, sortItems, getGroupItems } = this.config;

    const tmpGroups = [...groups];
    if (typeof sortGroups === 'function') tmpGroups.sort(sortGroups);

    return tmpGroups.map(group => {
      const isGroupChecked = defaultSelected.indexOf(group.id) !== -1;

      const tmpItems = getGroupItems(group);
      if (typeof sortItems === 'function') tmpItems.sort(sortItems);

      return {
        id: group.id,
        data: group,
        checked: isGroupChecked,
        items: tmpItems.map(item => {
          const isItemChecked = isGroupChecked || defaultSelected.indexOf(item.id) !== -1;

          return {
            id: item.id,
            data: item,
            checked: isItemChecked
          }
        })
      }
    });
  }

  get groups() {
    return this._groups;
  }

  get selected() {
    return this._selected;
  }

  getItemsByGroup(groupId) {

  }

  toggleGroup(groupId) {



    // const specs = getItemsByGroupId(groupId);
    // const updated = selected.filter((id) => {
    //   if (id === groupId) return false;
    //   if (specs.indexOf(id) !== -1) return false;
    //   return true;
    // });
    // if (checked) updated.push(groupId);
    // onChange(updated);

    // this.onChange(t);
  }

  toggleItem(itemId) {

    this.onChange()
  }

  onChange() {
    this.config.onChange(this.selected);
  }
}
