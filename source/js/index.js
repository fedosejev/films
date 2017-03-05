import '../scss/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import filmsReducer from './reducers/films';
import FilmsContainer from './components/FilmsContainer';

const store = createStore(filmsReducer, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

render(
  <Provider store={store}>
    <FilmsContainer />
  </Provider>,
  document.querySelector('[data-react-application]')
);
