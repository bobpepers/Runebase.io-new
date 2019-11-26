import axios from 'axios';
import { API_URL } from '../config';
import history from '../history';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_RESEND_FAILURE,
  VERIFY_EMAIL_ERROR,
  SIGNIN_FAILURE,
  AUTH_USER,
  UNAUTH_USER,
} from './types/index';

/**
 * Error helper
 */
export function authError(CONST, error) {
  return {
    type: CONST,
    payload: error,
  };
}

/**
 * Sign up
 */
export function signupUser(props) {
  const { captchaResponse } = props;
  return function (dispatch) {
    axios.post(`${API_URL}/signup`, { props, captchaResponse })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });

        history.push(`/signup/verify-email?email=${props.email}`);
      })
      .catch(response => {
        console.log(response);
        dispatch(authError(SIGNUP_FAILURE, response.data.error));
      });
  }
}

/**
 * Sign in
 */
export function signinUser(props) {
  const { email, password, captchaResponse } = props;
  console.log('1234');
  console.log(captchaResponse);

  return function (dispatch) {
    axios.post(`${API_URL}/signin`, { email, password, captchaResponse })
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));

        dispatch({ type: AUTH_USER });

        history.push('/users');
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Email, password or captcha isn't right")));
  }
}


/**
 * Resend verification code
 */
export function resendVerification(props) {
  return function (dispatch) {
    axios.post(`${API_URL}/resend-verify-code`, props)
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(response => dispatch(authError(SIGNUP_RESEND_FAILURE, response.data)));
  }
}


/**
 * Verify email
 */
export function verifyEmail(props) {
  return function (dispatch) {
    axios.post(`${API_URL}/signup/verify-email`, props)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));

        dispatch({ type: AUTH_USER });

        history.push('/users');
      })
      .catch(response => dispatch(authError(VERIFY_EMAIL_ERROR, response.data.error)));
  }
}

/**
 * Sign out
 */
export function signoutUser() {
  localStorage.clear();

  return {
    type: UNAUTH_USER,
  }
}
