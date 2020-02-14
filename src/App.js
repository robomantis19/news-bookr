import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile'; 
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'; 
import { PrivateRoute } from './helpers/PrivateRoute';

function App() {
  return (
    <div className="App">
      
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
    </div>
  );
}

export default App;
