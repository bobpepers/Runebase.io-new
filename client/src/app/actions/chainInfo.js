import axios from 'axios';
import { API_URL } from '../config';
import {
  FETCH_CHAININFO,
} from './types/index';

/**
 * Fetch ChainInfo
 */
export function fetchChainInfo() {
  const user = JSON.parse(localStorage.getItem('user'));

  console.log('5454');
  return function (dispatch) {
    console.log('function dispatch');
    axios.get(`${API_URL}/chaininfo`)
      .then(response => {
        console.log('response');
        console.log(response);
        dispatch({
          type: FETCH_CHAININFO,
          payload: response.data,
        });
        return response.data;
      });
  }
}
