import Axios from 'axios';
import { keywordsSuggest } from '../../api/api';

export function getSuggests(text) {
  return Axios(keywordsSuggest, {
    params: { text },
  }).then(response => {
    return response.data.items
  });
}
