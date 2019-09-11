import * as actionTypes from '../actions/actionTypes';
const initialState = {
  events: null,
  loading: false,
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EVENTS_START:
      return {
        ...state,
        loading: true
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
        error: action.error
      };

    default:
      return state;
  }
};
export default reducer;
