import {
  SET_TEXT,
  SET_SPECIALIZATION,
  SET_ONLY_WITH_SALARY,
  SET_SALARY,
  SET_CURRENCY,
} from '../actions/actionTypes/filters';

const initialState = {
  text: '',
  specialization: [],
  salary: 0,
  only_with_salary: false,
  currency: 'RUR'
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_SPECIALIZATION:
      return {
        ...state,
        specialization: action.payload,
      };
    case SET_SALARY:
      return {
        ...state,
        salary: action.payload || 0,
      };
    case SET_ONLY_WITH_SALARY:
      return {
        ...state,
        only_with_salary: action.payload,
      };
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
}
