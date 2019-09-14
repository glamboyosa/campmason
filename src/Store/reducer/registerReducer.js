import * as actionTypes from '../actions/actionTypes';
const initalState = {
  loading: false,
  error: null,
  phone: null
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.FETCH_PHONECODES:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_SUCCESS:
      const transformedData = action.data.map(el => {
        return {
          name: el.name,
          phone: el.callingCodes.map(el => el).join('')
        };
      });
      return {
        ...state,
        loading: false,
        phone: transformedData
      };
    case actionTypes.FETCH_FAILED:
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
