import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history }  from './store';
import App from './components/App';
import dotenv from "dotenv"; dotenv.config();

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.querySelector('#root')
);
