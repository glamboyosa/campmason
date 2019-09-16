import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authPage = () => {
  return {
    type: actionTypes.AUTH_PAGE
  };
};
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};
export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  };
};
export const signUpSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};
export const authFailed = error => {
  return {
    type: actionTypes.AUTH_FAILED,
    error
  };
};
export const authInit = authData => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post('/login', authData)
      .then(resp => {
        console.log(resp.data);
        dispatch(authSuccess(resp.data));
      })
      .catch(error => {
        console.error(error);
        dispatch(authFailed(error));
      });
  };
};
export const signUpInit = (signUpData, token) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post('/users', signUpData, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        console.log(resp.data);
        dispatch(signUpSuccess());
      })
      .catch(error => {
        console.error(error);
        dispatch(authFailed(error));
      });
  };
};
export const removeStyle = () => {
  return {
    type: actionTypes.REMOVE_STYLE
  };
};
