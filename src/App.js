import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/Main'
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {

    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/order" component={CreateOrder}/>
                </Switch>
            </HashRouter>
        </Provider>
    );
}

export default App;
