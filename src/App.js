import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {LoggedInProvider} from './context/LoggedInContext';
import Home from './homepage/Home';
import BitterFeed from './bitterfeed/BitterFeed';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
    <Switch>
      <LoggedInProvider>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signup"><h1>Signup</h1></Route>
      <Route exact path="/forgot"><h1>Forgot Password here</h1></Route>
      <Route exact path="/feed"><BitterFeed /></Route>
      </LoggedInProvider>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
