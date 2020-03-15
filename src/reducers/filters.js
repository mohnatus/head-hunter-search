import {
  SET_TEXT,
  SET_SPECIALIZATION,
  SET_SALARY,
  SET_CURRENCY,
} from '../actions/actionTypes/filters';

const initialState = {
  text: '',
  specialization: [],
  salary: null,
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
        salary: action.payload || null,
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
