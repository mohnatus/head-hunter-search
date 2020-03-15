import { SET_TEXT, SET_SPECIALIZATION } from './actionTypes/filters';

export function setText(text = []) {
  return {
    type: SET_TEXT,
    payload: text,
  };
}

export function setSpecialization(specialization = []) {
  return {
    type: SET_SPECIALIZATION,
    payload: specialization,
  };
}
