import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Cart } from "../../pages/index";
import Normalize from "react-normalize";


export const App = () => {
    return (
        <BrowserRouter basename="/react-pizza">
            <div className="wrapper">
                <Normalize />
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/cart'} component={Cart}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}