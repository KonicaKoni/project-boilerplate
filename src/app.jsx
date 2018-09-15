import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import '../assets/css/app.css';
import { configureStore } from './store';
import { App } from './pages';


const store = configureStore({ }, thunk);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app'),
);

