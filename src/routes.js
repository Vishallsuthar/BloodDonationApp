
import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
  

import Donner from './pages/donner'
import Patient from './pages/patient'
import Home from './pages/home'
import Faq from './pages/faq'
import TermsOfUse from './pages/terms-of-use'
import Ourteam from './pages/our-team'

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
            <Route exact path="/our-team">
                <Ourteam />
            </Route>
        </Switch>
    
        )}
}
export default Routes;