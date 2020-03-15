import * as types from './actionsTypes';
import axios from 'axios';
import { specializations } from '../api/api';

/**
 * Получение списка специализаций
 */
export function getSpecializations() {
	return (dispatch) => {
		dispatch({
			type: types.GET_SPECIALIZATIONS_REQUEST
		});

		axios
			.get(specializations)
			.then(response => {
				dispatch({
					type: types.GET_SPECIALIZATIONS_SUCCESS,
					payload: response.data
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


