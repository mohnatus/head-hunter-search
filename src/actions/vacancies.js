import * as types from './actionTypes/vacancies';
import axios from 'axios';
import qs from 'qs';
import { vacancies } from '../api/api';

/**
 * Получение списка вакансий
 */
export function getVacancies(filters = {}) {
  return (dispatch) => {
    dispatch({
      type: types.GET_VACANCIES_REQUEST,
    });

    const params = { ...filters };
    const notNullParams = ['salary'];
    notNullParams.forEach((key) => {
      if (!params[key]) delete params[key];
    });

    axios(vacancies, {
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    })
      .then((response) => {
        dispatch({
          type: types.GET_VACANCIES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.GET_VACANCIES_FAIL,
          payload: error,
        });
      });
  };
}
