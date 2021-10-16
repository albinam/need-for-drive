import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main/Main'
import CreateOrder from "./pages/CreateOrder/CreateOrder";
import {Provider} from "react-redux";
import store from "./redux/store";
import Order from "./pages/Order/Order";

function App() {

    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/order" component={CreateOrder}/>
                    <Route exact path="/order/:id" component={Order}/>
                </Switch>
            </HashRouter>
        </Provider>
    );
}
export default App;