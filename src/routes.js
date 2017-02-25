import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Container from './components/Container/index.js';
import Home from './Pages/Home/index.js';
import Commercial from './Pages/Commercial/index.js';
import Residential from './Pages/Residential/index.js';

export default (
  <Router history={hashHistory}>
    <Route path ='/' component = {Container}>
      <IndexRoute component={Home} />
      <Route path='commercial' component ={Commercial} />
      <Route path='residential' component ={Residential} />
    </Route>
  </Router>
);
