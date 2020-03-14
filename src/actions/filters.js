import { SET_KEYWORDS } from './actionTypes/filters';

export function setKeywords(keywords = []) {
  return {
    type: SET_KEYWORDS,
    payload: keywords
  }
}
