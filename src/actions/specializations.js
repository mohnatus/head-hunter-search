import * as types from './actionsTypes';
import axios from 'axios';
import { specializationsSuggest } from '../api/api';

/**
 * Получение списка специализаций
 */
export function getSpecializations(value) {
	return (dispatch, ...other) => {
		if (value.length < 2) {
			dispatch({
				type: types.GET_SPECIALIZATIONS_SUCCESS,
				payload: []
			});
			return;
		}

		dispatch({
			type: types.GET_SPECIALIZATIONS_REQUEST
		});

		axios
			.get(specializationsSuggest + '?locale=RU&text=' + value)
			.then(response => {
				dispatch({
					type: types.GET_SPECIALIZATIONS_SUCCESS,
					payload: response.data.items
				});
			})
			.catch(error => {
				console.error(error);

				dispatch({
					type: types.GET_SPECIALIZATIONS_FAIL,
					payload: error
				});
			});
	};
}

/**
 * Выбор специализаций
 * @param {Object[]} specializations
 */
export function setSpecializations(specializations) {
	return {
		type: types.SET_SPECIALIZATIONS,
		payload: specializations
	};
}
