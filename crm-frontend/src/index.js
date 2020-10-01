import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


