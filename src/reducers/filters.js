import { SET_TEXT, SET_SPECIALIZATION } from '../actions/actionTypes/filters'

const initialState = {
  text: '',
  specialization: []
}

export function filtersReducer(state = initialState, action) {
  switch(action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      }
    case SET_SPECIALIZATION:
      return {
        ...state,
        specialization: action.payload
      }
    default:
      return state;
  }
}
