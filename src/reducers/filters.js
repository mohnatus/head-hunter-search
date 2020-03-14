import { SET_KEYWORDS } from '../actions/actionTypes/filters'

const initialState = {
  keywords: ''
}

export function filtersReducer(state = initialState, action) {
  switch(action.type) {
    case SET_KEYWORDS:
      return {
        ...state,
        keywords: action.payload
      }
    default:
      return state;
  }
}
