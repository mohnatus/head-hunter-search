import React from 'react';
import { connect } from 'react-redux';
import {
	getSpecializations,
	setSpecializations
} from '../actions/specializations';
import Specializations from '../components/Specializations';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App({ specializations, getSpecializations, setSpecializations }) {
	return (
		<div className='app'>
			<CssBaseline />
			<Container maxWidth="lg">
				<Specializations
					{...specializations}
					onSelect={setSpecializations}
					getItems={getSpecializations}
					label='Выбрать специализацию'
          placeholder='Специализация'
				></Specializations>
			</Container>
		</div>
	);
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
