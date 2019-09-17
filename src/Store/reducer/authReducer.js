import * as actiontTypes from '../actions/actionTypes';
const intialState = {
  loading: false,
  isAuth: false,
  isSignedUp: false,
  authPage: false,
  token: null,
  error: null
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actiontTypes.REMOVE_STYLE:
      return {
        ...state,
        authPage: false,
        isSignedUp: false
      };
    case actiontTypes.AUTH_PAGE:
      return {
        ...state,
        authPage: true
      };
    case actiontTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        isSignedUp: false,
        token: null
      };
    case actiontTypes.AUTH_START:
      return {
        ...state,
        loading: true
      };
    case actiontTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.token,
        authPage: false
      };
    case actiontTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedUp: true,
        authPage: false
      };
    case actiontTypes.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        isSignedUp: false,
        authPage: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default reducer;
