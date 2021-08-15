import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
import Navbar from './Navbar';

const ReactRouter = () => {
  return (
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/people'>
        <People />
      </Route>
    </Router>
  );
};

export default ReactRouter;
