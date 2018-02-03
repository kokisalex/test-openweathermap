import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import promiseMiddleware from 'redux-promise';
import {omit, compose} from 'ramda';

import Main from './Main/MainConnected';
import main from './Main/Redux/MainReducer';

const slicer = () => (store) => {
  return omit(['notifications'], store);
};

const enhancer = compose(
  applyMiddleware(promiseMiddleware),
  persistState(null, {slicer})
);

const store = createStore(
  main,
  getDevTools(),
  enhancer,
);

export default function Reducer() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export function getDevTools() {
  return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}