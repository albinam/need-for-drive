import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/Main'

function App() {

  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
