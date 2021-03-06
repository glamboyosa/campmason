import * as actionTypes from '../actions/actionTypes';
const initialState = {
  events: null,
  loading: false,
  error: null,
  isUpdated: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EVENTS_START:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case actionTypes.EVENTS_POSTSUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      };
    case actionTypes.EVENTS_PUTDELETESUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      };
    case actionTypes.EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.data
      };
    case actionTypes.EVENTS_FAILED:
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
