import './index.less';
//
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
//
import RootReducers from './RootReducers';
import { AUTH_USER } from './modules/auth/AuthActions';
import App from './App';


import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(RootReducers);

const token = localStorage.getItem('react-math-token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
