import * as actionTypes from './actionTypes';
import axios from 'axios';
export const homeStart = () => {
  console.log('from homestart action creator');
  return {
    type: actionTypes.HOME_START
  };
};
export const homeSuccess = data => {
  return {
    type: actionTypes.HOME_SUCCESS,
    data
  };
};
export const homeFailed = error => {
  return {
    type: actionTypes.HOME_FAILED,
    error
  };
};

export const homeInit = () => {
  return dispatch => {
    dispatch(homeStart());
    axios.get('/camps').then(resp => {
      console.log(resp);
    });
  };
};
