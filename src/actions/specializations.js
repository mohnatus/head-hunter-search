import {
  GET_SPECIALIZATIONS_REQUEST,
  GET_SPECIALIZATIONS_SUCCESS,
  GET_SPECIALIZATIONS_FAIL,
} from './actionTypes/specializations';
import axios from 'axios';
import { specializations } from '../api/api';

/**
 * Получение списка специализаций
 */
export function getSpecializations() {
  return (dispatch) => {
    dispatch({
      type: GET_SPECIALIZATIONS_REQUEST,
    });

    axios
      .get(specializations)
      .then((response) => {
        dispatch({
          type: GET_SPECIALIZATIONS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(error);

        dispatch({
          type: GET_SPECIALIZATIONS_FAIL,
          payload: error,
        });
      });
  };
}
