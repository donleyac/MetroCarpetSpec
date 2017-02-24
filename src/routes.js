import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Header from './components/Header/index.js';
import Home from './Pages/Home/index.js';
import Commercial from './Pages/Commercial/index.js';
import Residential from './Pages/Residential/index.js';

export default (
  <Router history={hashHistory}>
    <Route path ='/' component = {Header}>
      <IndexRoute component={Home} />
      <Route path='commercial' component ={Commercial} />
      <Route path='residential' component ={Residential} />
    </Route>
  </Router>
);
