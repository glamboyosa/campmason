import * as actionTypes from './actionTypes';
import axios from 'axios';
export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START
  };
};
export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS
  };
};
export const registerFailed = error => {
  return {
    type: actionTypes.REGISTER_FAILED,
    error
  };
};
export const registerInit = order => {
  return dispatch => {
    dispatch(registerStart());
    axios
      .post('/campusers', order)
      .then(resp => {
        console.log(resp.data);
        dispatch(registerSuccess());
      })
      .catch(error => dispatch(registerFailed(error)));
  };
};
export const fetchSuccess = data => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    data
  };
};
export const fetchFailed = error => {
  return {
    type: actionTypes.FETCH_FAILED,
    error
  };
};
export const fetchPhone = () => {
  return dispatch => {
    dispatch(registerStart());
    axios
      .get('https://restcountries-v1.p.rapidapi.com/all', {
        headers: {
          'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
          'x-rapidapi-key': '2a07bb0cbdmsh1fa126a0680abf9p196b5ajsn4dc579019437'
        }
      })
      .then(resp => {
        console.log(resp.data);
        dispatch(fetchSuccess(resp.data));
        const transformedData = resp.data.map(el => [
          el.name,
          el.callingCodes.map(el => el).join('')
        ]);
        const TransformedData = resp.data.map(el => {
          return {
            name: el.name,
            phone: el.callingCodes.map(el => el).join('')
          };
        });
        console.log(TransformedData);
        console.log(transformedData);
      })
      .catch(error => {
        console.error(error);
        dispatch(fetchFailed(error));
      });
  };
};
