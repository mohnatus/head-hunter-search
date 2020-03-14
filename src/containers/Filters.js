import React from 'react';
import { connect } from 'react-redux';
import Specializations from '../components/Specializations';
import {
	getSpecializations,
	setSpecializations
} from '../actions/specializations';

const Filters = ({ specializations, getSpecializations, setSpecializations }) => {
  return (
    <div>
      <Specializations
					{...specializations}
					onSelect={setSpecializations}
					getItems={getSpecializations}
					label='Выбрать специализацию'
          placeholder='Специализация'
				></Specializations>
    </div>
  );
};

const mapStateToProps = ({ specializations }) => {
	return {
		specializations
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getSpecializations: (value) => {
			dispatch(getSpecializations(value));
		},
		setSpecializations: specializations => {
			dispatch(setSpecializations(specializations));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
