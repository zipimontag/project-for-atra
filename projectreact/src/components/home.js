import React from 'react';
import { connect } from 'react-redux';
import UserDetails from './userDetails';
import AllUsers from './allUsers';
import FormLogin from './formLogin';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export default function Home(props) {
    return (
        <div>
            <Menu />
            <Switch>
            
            <Route path="/formLogin">
                    <FormLogin></FormLogin>
                </Route>       
                <Route path="/userDetails">
                    <UserDetails></UserDetails>
                </Route>
                <Route path="/allUsers">
                    <AllUsers></AllUsers>
                </Route>
            </Switch>
        </div>
    );
}

function Menu(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to='/formLogin'>formLogin</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to='/userDetails'>userDetails</Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to='/allUsers'>allUsers</Link>
                </div>
            </nav>
        </div>
    )
}