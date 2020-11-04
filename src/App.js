import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import Add from "./components/add";
import Edit from "./components/edit";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={`/edit/:id`} component={Edit}/>
                <Route exact path={`/delete/:id`} component={Edit}/>
                <Route exact path={`/add`} component={Add}/>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}
