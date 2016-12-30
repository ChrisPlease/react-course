import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';

import './styles/style.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
),
document.getElementById('app'));
