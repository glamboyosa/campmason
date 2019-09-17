import * as actionTypes from './actionTypes';
import axios from 'axios';
export const eventStart = () => {
  return {
    type: actionTypes.EVENTS_START
  };
};
export const eventsPostSuccess = () => {
  return {
    type: actionTypes.EVENTS_POSTSUCCESS
  };
};
export const putDeleteSuccess = () => {
  return {
    type: actionTypes.EVENTS_PUTDELETESUCCESS
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
        dispatch(eventSuccess(resp.data));
      })
      .catch(error => dispatch(eventsFailed(error)));
  };
};
export const eventsPostInit = (data, token) => {
  return dispatch => {
    dispatch(eventStart());
    axios
      .post('/events', data, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        dispatch(eventsPostSuccess());
      })
      .catch(error => dispatch(eventsFailed(error)));
  };
};
export const eventsPutInit = (data, token, id) => {
  return dispatch => {
    dispatch(eventStart());
    axios
      .put('/events/' + id, data, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        dispatch(putDeleteSuccess());
      })
      .catch(error => dispatch(eventsFailed(error)));
  };
};
export const eventsDeleteInit = (token, id) => {
  return dispatch => {
    dispatch(eventStart());
    axios
      .delete('/events/' + id, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        dispatch(putDeleteSuccess());
      })
      .catch(error => dispatch(eventsFailed(error)));
  };
};
