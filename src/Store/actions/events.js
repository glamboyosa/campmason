import * as actionTypes from './actionTypes';
import axios from 'axios';
export const eventStart = () => {
  return {
    type: actionTypes.EVENTS_START
  };
};
export const eventSuccess = data => {
  return {
    type: actionTypes.EVENTS_SUCCESS,
    data
  };
};
export const eventsFailed = error => {
  return {
    type: actionTypes.EVENTS_FAILED,
    error
  };
};

export const eventsInit = () => {
  return dispatch => {
    dispatch(eventStart());

    axios
      .get('/events')
      .then(resp => {
        console.log(resp);
        dispatch(eventSuccess(resp.data));
      })
      .catch(error => dispatch(eventsFailed(error)));
  };
};
