
import React, { Component,useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Donner from './pages/donner'
import Patient from './pages/patient'
import Home from './pages/home'


class Routes extends React.Component {
    render() {
        
        
        return (
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/patient">
                    <Patient />
            </Route>
            <Route exact path="/doner">
                <Donner />
            </Route>
    </Switch>
    
        )}
}
export default Routes;