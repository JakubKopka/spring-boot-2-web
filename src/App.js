import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import Add from "./components/add";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path={`/add`} component={Add}/>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}