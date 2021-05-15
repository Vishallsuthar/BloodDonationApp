import React, { Component } from 'react'

import { AiOutlineMenu } from 'react-icons/ai';
import {  Navbar,Nav, Image  } from 'react-bootstrap';
import { Link  } from "react-router-dom";


import logo  from '../images/logo.svg'
export default class header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="white"  expand="lg">
                    <Link to="/" className="navbar-brand" ><Image className="" fluid width="60px" src={logo}/> Sapna Foundation</Link>
                   <Navbar.Toggle>
                        <AiOutlineMenu/>
                    </Navbar.Toggle>
                   
                    <Navbar.Collapse id="mainNavbar" className="justify-content-end ">
                    <Nav >
                        <Nav.Item ><Link to="/" className="nav-link" >Home</Link></Nav.Item>
                        <Nav.Item ><Link to="/our-team" className="nav-link" >Our Teams</Link></Nav.Item>
                        <Nav.Item ><Link to="/faq" className="nav-link" >Faq</Link></Nav.Item>
                        <Nav.Item ><Link to="/terms-of-use" className="nav-link" >Terms of use</Link></Nav.Item>
                
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
           
        )
    }
}
