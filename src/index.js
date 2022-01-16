import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/header'

import './scss/app.scss';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

