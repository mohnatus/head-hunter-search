import {
	GET_SPECIALIZATIONS_REQUEST,
	GET_SPECIALIZATIONS_SUCCESS,
	GET_SPECIALIZATIONS_FAIL
} from '../actions/actionTypes/specializations';

const initialState = {
	items: [],
  loading: false,
	error: ''
};

/**
 * Редьюсер специализаций
 * @param {Object} state
 * @param {Object} action
 */
export function specializationsReducer(state = initialState, action) {
	switch(action.type) {
		case GET_SPECIALIZATIONS_REQUEST:
			return {
				...state,
				loading: true
			}
		case GET_SPECIALIZATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload
			}
		case GET_SPECIALIZATIONS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
		  return state;
	}
}
