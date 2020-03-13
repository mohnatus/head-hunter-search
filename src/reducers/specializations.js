import {
	GET_SPECIALIZATIONS_REQUEST,
	GET_SPECIALIZATIONS_SUCCESS,
	GET_SPECIALIZATIONS_FAIL,
	SET_SPECIALIZATIONS
} from '../actions/actionsTypes';

const initialState = {
	items: [],
	selected: [],
  loading: false,
	loaded: false,
	error: ''
};

/**
 * Редьюсер специализаций
 * @param {Object} state
 * @param {Object} action
 */
export function specializationsReducer(state = initialState, action) {
  console.log(action)
	switch (action.type) {
		case GET_SPECIALIZATIONS_REQUEST:
			return {
				...state,
        loading: true,
				error: ''
			};
		case GET_SPECIALIZATIONS_SUCCESS:
      const selected = state.selected.map(item => item.id);
			return {
				...state,
        loading: false,
				loaded: true,
				items: action.payload.filter(item => selected.indexOf(item.id) === -1)
			};
		case GET_SPECIALIZATIONS_FAIL:
			return {
				...state,
        loading: false,
				error: action.payload
			};
		case SET_SPECIALIZATIONS:
			return {
				...state,
				selected: action.payload
			};
		default:
			return state;
	}
}
