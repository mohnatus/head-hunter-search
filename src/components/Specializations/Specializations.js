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
	getItems,
	onSelect
}) {

	const selectHandler = (_, value) => {
		onSelect(value);
	};

  function inputChangeHandler(_, value) {
    getItems(value);
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
      noOptionsText='Ничего не найдено'
			options={items}
			getOptionLabel={option => `${option.id}. ${option.text}`}
			renderInput={getInput}
			value={selected}
			onChange={selectHandler}
      onInputChange={inputChangeHandler}
		/>
	);
}
