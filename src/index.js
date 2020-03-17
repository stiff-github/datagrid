import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from './reducers';
import {Provider, connect} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import tableSagas from './sagas/tableSagas';

const sagaMiddleware = createSagaMiddleware()

const store=createStore(allReducers, compose(applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(tableSagas)
store.dispatch({ type: 'INIT_ROWS' })

const ConnectedApp = connect((state) => {
  return state;
})(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();