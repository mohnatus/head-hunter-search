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

	function openHandler() {
		if (!loaded) {
			getItems();
		}
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

	const widgetItems = items.reduce((acc, group) => {
		const { id, name, specializations } = group;
		const groupItem = { id, name };
		specializations.sort((a, b) => (a.name < b.name ? -1 : 1));
		return [...acc, groupItem, ...specializations];
	}, []);

	const groups = {};

	items.forEach(group => {
		const { id: groupId, name: groupName } = group;
		groups[groupId] = groupName;

		group.specializations.forEach(spec => {
			const { id } = spec;
			groups[id] = groupName;
		});
	});

	return (
		<Autocomplete
			id='select-specializations'
			multiple
			loading={loading}
			loadingText='Загрузка...'
			noOptionsText='Ничего не найдено'
			options={widgetItems}
			groupBy={option => groups[option.id]}
			getOptionLabel={option => `${option.name}`}
			renderInput={getInput}
			value={selected}
			onChange={selectHandler}
			onOpen={openHandler}
		/>
	);
}
