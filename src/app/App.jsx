import React from 'react';
import './App.css';
import {MovieEditor} from './MovieEditor';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { MoviesDashboard } from './MoviesDashboard';

export const App = () => <>
  <Router>
      <Switch>
      <Route path="/new" component={ MovieEditor }/>
        <Route path="/edit/:movieId" component={ MovieEditor }/>
        <Route path="/" component={ MoviesDashboard }/>
      </Switch>
    </Router>
</>;
