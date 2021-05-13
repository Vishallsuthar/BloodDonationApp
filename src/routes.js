
import React, { Component,useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import { AnimatedSwitch } from 'react-router-transition';

import Donner from './pages/donner'
import Patient from './pages/patient'
import Home from './pages/home'
import Faq from './pages/faq'
import TermsOfUse from './pages/terms-of-use'

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
            <Route exact path="/faq">
                <Faq />
            </Route>
            <Route exact path="/terms-of-use">
                <TermsOfUse />
            </Route>
        </Switch>
    
        )}
}
export default Routes;