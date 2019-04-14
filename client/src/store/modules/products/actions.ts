import { FETCH_PRODUCTS, SET_PRODUCTS } from '../../products-types';
import axios from 'axios';

export const actions = {
  [FETCH_PRODUCTS] ({ commit }) {
    return axios.get('http://localhost:3600/v1/Products')
      .then((response) =>
        commit(SET_PRODUCTS, response.data));
  }
}