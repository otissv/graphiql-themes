import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';
import GraphiQL from './GraphiQL';

ReactDOM.render(
  <Provider store={store}>
    <GraphiQL />
  </Provider>,
  document.getElementById('root')
);
