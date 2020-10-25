import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import NewItem from "./components/new-item";
import Item from "./components/item";
import EditItem from "./components/edit-item";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/add">
                    <NewItem/>
                </Route>
                <Route path={`/edit/:id`} component={EditItem}/>
                <Route path={`/:id`} component={Item}/>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}