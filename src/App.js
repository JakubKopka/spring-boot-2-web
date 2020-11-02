import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import Edit from "./components/edit";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path={`/:id`} component={Edit}/>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}
