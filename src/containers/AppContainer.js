import React from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Filters from '../components/Filters';
import Button from '@material-ui/core/Button';

import VacanciesList from '../components/VacanciesList';
import { getVacancies } from '../actions/vacancies';

import { setKeywords } from '../actions/filters';

function AppContainer(props) {
	const {
		vacancies, getVacancies,

		filters,

		setKeywords
	} = props;

	const filtersActions = {
		setKeywords
	}

	function updateList(page = 0) {
    getVacancies({
			text: filters.keywords,
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
					<Filters {...filters} {...filtersActions} />
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

const mapStateIntoProps = ({ vacancies, filters }) => {
  return {
		vacancies,

		filters
  };
};

const mapDispatchIntoProps = (dispatch) => {
  return {
    getVacancies: (params) => {
      dispatch(getVacancies(params));
		},

		setKeywords: (keywords) => {
			dispatch(setKeywords(keywords))
		}
  };
};

export default connect(mapStateIntoProps, mapDispatchIntoProps)(AppContainer);
