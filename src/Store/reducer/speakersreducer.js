import * as actionTypes from '../actions/actionTypes';
const initialState = {
  speakers: null,
  loading: false,
  error: null,
  isUpdated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SPEAKERS_START:
      return {
        ...state,
        loading: true,
        isUpdated: false
      };
    case actionTypes.SPEAKERS_PUTDELETESUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      };
    case actionTypes.SPEAKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        speakers: action.data
      };
    case actionTypes.SPEAKERS_POSTSUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      };
    case actionTypes.SPEAKERS_FAILED:
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
