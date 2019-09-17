import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import campReducer from './Store/reducer/campReducer';
import eventsReducer from './Store/reducer/eventsReducer';
import registerReducer from './Store/reducer/registerReducer';
import authReducer from './Store/reducer/authReducer';
import campUserReducer from './Store/reducer/campuser';
import speakersReducer from './Store/reducer/speakersreducer';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
axios.defaults.baseURL = 'https://node-camps.herokuapp.com/api';
const rootReducer = combineReducers({
  camp: campReducer,
  event: eventsReducer,
  register: registerReducer,
  auth: authReducer,
  campUser: campUserReducer,
  speaker: speakersReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
