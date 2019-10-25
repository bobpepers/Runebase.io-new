import axios from 'axios';
import { API_URL } from '../config';
import history from '../history';
import {
  CONTACT_SEND,
} from './types/index';


/**
 * CONTACT SEND
 */
export function constactSend(props) {
  const { name, email, message } = props;

  return function (dispatch) {
    axios.post(`${API_URL}/contactsend`, { name, email, message })
      .then(response => {
        console.log(response);

        dispatch({ type: CONTACT_SEND });

        history.push('/users');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

