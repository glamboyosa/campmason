import * as actionTypes from '../actions/actionTypes';
const initialState = {
  users: null,
  loading: false,
  error: null,
  isUpdated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CAMPUSERS_START:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case actionTypes.CAMPUSERS_PUTDELETESUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      };
    case actionTypes.CAMPUSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.data
      };
    case actionTypes.CAMPUSERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
        isUpdated: false
      };

    default:
      return state;
  }
};
export default reducer;
