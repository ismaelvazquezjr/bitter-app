import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './homepage/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signup"><h1>Signup</h1></Route>
      <Route exact path="/forgot"><h1>Forgot Password here</h1></Route>
      <Route exact path="/feed"><h1>Feed goes here</h1></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
