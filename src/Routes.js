import React from "react";
import { Route, Switch } from "react-router-dom";
import LineChart from "./App";
import Login from "./containers/Login";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <LineChart />
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    );
}