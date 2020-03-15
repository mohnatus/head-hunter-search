import { SET_TEXT, SET_SPECIALIZATION, SET_SALARY, SET_CURRENCY, SET_ONLY_WITH_SALARY } from './actionTypes/filters';

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

export function setSalary(salary) {
  return {
    type: SET_SALARY,
    payload: salary,
  };
}

export function setOnlyWithSalary(onlyWithSalary) {
  return {
    type: SET_ONLY_WITH_SALARY,
    payload: onlyWithSalary,
  };
}

export function setCurrency(currency) {
  return {
    type: SET_CURRENCY,
    payload: currency,
  };
}
