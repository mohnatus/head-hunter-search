import React from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Filters from '../components/Filters';
import Button from '@material-ui/core/Button';
import VacanciesList from '../components/VacanciesList';

import {
	getSpecializations,
	setSpecializations
} from '../actions/specializations';
import { getVacancies } from '../actions/search';

function AppContainer(props) {
	const {
		specializations, getSpecializations, setSpecializations,
		vacancies, getVacancies
	} = props;

	const filters = {
		specializations, getSpecializations, setSpecializations
	}

	function updateList(page = 0) {
    getVacancies({
      specialization: specializations.selected.map((spec) => spec.id),
      page,
    });
  }

  function searchButtonClickHandler() {
    updateList();
  }

  const pageChangeHandler = (page) => {
    updateList(page);
  };

	return (
		<div className='app'>
			<CssBaseline />
			<Container maxWidth="lg">
				<div style={{ padding: 20 }}>
					<Filters {...filters} />
					<div>
						<Button onClick={searchButtonClickHandler}>Искать вакансии</Button>
					</div>
				</div>
				<div style={{ padding: 20 }}>
					<VacanciesList vacancies={vacancies} onPageChange={pageChangeHandler} />
				</div>
			</Container>
		</div>
	);
}

const mapStateIntoProps = ({ specializations, vacancies }) => {
  return {
    specializations: specializations,
    vacancies: vacancies,
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    getVacancies: (params) => {
      dispatch(getVacancies(params));
		},
		getSpecializations: () => {
			dispatch(getSpecializations());
		},
		setSpecializations: specializations => {
			dispatch(setSpecializations(specializations));
		}
  };
};

export default connect(mapStateIntoProps, mapDispatchIntoProps)(AppContainer);
