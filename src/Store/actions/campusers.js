import * as actionTypes from './actionTypes';
import axios from 'axios';
export const campUsersStart = () => {
  return {
    type: actionTypes.CAMPUSERS_START
  };
};
export const campUsersSuccess = data => {
  return {
    type: actionTypes.CAMPUSERS_SUCCESS,
    data
  };
};
export const campUsersFailed = error => {
  return {
    type: actionTypes.CAMPUSERS_FAILED,
    error
  };
};
export const campUsersPut = () => {
  return {
    type: actionTypes.CAMPUSERS_PUTDELETESUCCESS
  };
};
export const campUsersInit = () => {
  return dispatch => {
    dispatch(campUsersStart());
    axios
      .get('/campusers')
      .then(resp => {
        dispatch(campUsersSuccess(resp.data));
      })
      .catch(error => {
        dispatch(campUsersFailed(error));
      });
  };
};
export const campUsersPutInit = (data, id) => {
  return dispatch => {
    dispatch(campUsersStart());
    axios
      .put('/campusers/' + id, data)
      .then(resp => {
        dispatch(campUsersPut());
      })
      .catch(error => {
        dispatch(campUsersFailed(error));
      });
  };
};
