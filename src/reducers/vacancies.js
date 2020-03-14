import {
	GET_VACANCIES_REQUEST,
	GET_VACANCIES_SUCCESS,
	GET_VACANCIES_FAIL
} from '../actions/actionTypes/vacancies';

const initialState = {
  items: [],
  touched: false,
  pages: 0,
  page: 0,
  loading: false,
	error: ''
};

/**
 * Редьюсер специализаций
 * @param {Object} state
 * @param {Object} action
 */
export function vacanciesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_VACANCIES_REQUEST:
			return {
				...state,
        loading: true,
				error: ''
			};
		case GET_VACANCIES_SUCCESS:
      const { items, page, pages } = action.payload;
			return {
				...state,
        loading: false,
        items,
        page,
        pages,
        touched: true
			};
		case GET_VACANCIES_FAIL:
			return {
				...state,
        loading: false,
				error: action.payload
			};
		default:
			return state;
	}
}
