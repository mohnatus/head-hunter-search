export const defaultConfig = {
  getValue: (item) => item.value,
  getLabel: item => item.label,

  getChildren: item => item.children,
  sort: null,
}
