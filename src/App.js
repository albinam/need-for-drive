import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/Main'
import CreateOrder from "./pages/CreateOrder/CreateOrder";

function App() {

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/order" component={CreateOrder}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
