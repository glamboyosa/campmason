import * as actionTypes from '../actions/actionTypes';
const initialState = {
  camps: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.HOME_SUCCESS:
      return {
        ...state,
        camps: action.data,
        loading: false
      };
    case actionTypes.HOME_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
