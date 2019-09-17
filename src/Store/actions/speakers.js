import * as actionTypes from './actionTypes';
import axios from 'axios';
export const speakersStart = () => {
  return {
    type: actionTypes.SPEAKERS_START
  };
};
export const speakersSuccess = data => {
  return {
    type: actionTypes.SPEAKERS_SUCCESS,
    data
  };
};
export const speakersPostSuccess = () => {
  return {
    type: actionTypes.SPEAKERS_POSTSUCCESS
  };
};
export const speakersFailed = error => {
  return {
    type: actionTypes.SPEAKERS_FAILED,
    error
  };
};
export const speakersPutDelete = () => {
  return {
    type: actionTypes.SPEAKERS_PUTDELETESUCCESS
  };
};
export const speakersInit = () => {
  return dispatch => {
    dispatch(speakersStart());
    axios
      .get('/speakers')
      .then(resp => {
        dispatch(speakersSuccess(resp.data));
      })
      .catch(error => {
        dispatch(speakersFailed(error));
      });
  };
};
export const speakersPostInit = (data, token) => {
  return dispatch => {
    dispatch(speakersStart());
    axios
      .post('/speakers', data, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        dispatch(speakersPostSuccess());
      })
      .catch(error => {
        dispatch(speakersFailed(error));
      });
  };
};
export const speakersPutDeleteInit = (data, token, id) => {
  return dispatch => {
    dispatch(speakersStart());
    axios
      .put('/speakers/' + id, data, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        dispatch(speakersPutDelete());
      })
      .catch(error => {
        dispatch(speakersFailed(error));
      });
  };
};
export const speakersDeleteInit = (token, id) => {
  return dispatch => {
    dispatch(speakersStart());
    axios
      .delete('/speakers/' + id, {
        headers: {
          'x-auth-token': token
        }
      })
      .then(resp => {
        dispatch(speakersPutDelete());
      })
      .catch(error => {
        dispatch(speakersFailed(error));
      });
  };
};
