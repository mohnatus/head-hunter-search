import * as types from './actionsTypes';
import axios from 'axios';
import qs from 'qs';
import { vacancies } from '../api/api';

/**
 * Получение списка вакансий
 */
export function getVacancies(filters = {}) {
	return dispatch => {
		dispatch({
			type: types.GET_VACANCIES_REQUEST
		});

		axios(vacancies, {
			params: filters,
			paramsSerializer: params => {
				return qs.stringify(params, { arrayFormat: 'repeat' });
			}
		})
			.then(response => {
				dispatch({
					type: types.GET_VACANCIES_SUCCESS,
					payload: response.data
				});
			})
			.catch(error => {
				dispatch({
					type: types.GET_VACANCIES_FAIL,
					payload: error
				});
			});
	};
}
