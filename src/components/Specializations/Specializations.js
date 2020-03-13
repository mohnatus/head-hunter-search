import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

Specializations.propTypes = {
	items: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	loaded: PropTypes.bool.isRequired,
	getItems: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default function Specializations({
	items,
	selected,
	loading,
	loaded,
	getItems,
	onSelect
}) {
	const selectHandler = (_, value) => {
		onSelect(value);
	};

  items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

	const widgetItems = items.reduce((acc, group) => {
		const titleItem = {
			id: group.id,
      name: group.name
		};
    const specializations = group.specializations;
    specializations.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

		return [...acc, titleItem, ...specializations];
	}, []);


  const groups = items.reduce((acc, group) => {
    const specializations = group.specializations.map(spec => spec.id);
    const groupName = `${group.id}. ${group.name}`;
    return {
      ...acc,
      [group.id]: groupName,
      ...specializations.reduce((acc, specId) => ({ ...acc, [specId]: groupName }), {})
    }
  }, {});

	function openHandler() {
		if (!loaded) getItems();
	}

	function getInput(params) {
		return (
			<TextField
				{...params}
				label='Выбрать специализации'
				variant='standard'
				InputProps={{
					...params.InputProps,
					endAdornment: (
						<React.Fragment>
							{loading ? (
								<CircularProgress color='inherit' size={20} />
							) : null}
							{params.InputProps.endAdornment}
						</React.Fragment>
					)
				}}
			/>
		);
	}

	return (
		<Autocomplete
			id='select-specializations'
			multiple
			loading={loading}
      loadingText='Загрузка...'
			onOpen={openHandler}
			options={widgetItems}
			groupBy={option => groups[option.id]}
			getOptionLabel={option => `${option.id}. ${option.name}`}
			renderInput={getInput}
			value={selected}
			onChange={selectHandler}
		/>
	);
}
