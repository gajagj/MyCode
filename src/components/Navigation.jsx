import React, { Component } from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class Navigation extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            
                <Navbar bg="secondary" variant="dark">
                    <Navbar.Brand><Link className="text text-white" to="/register">MyCars</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <ul className="nav navbar">
                        <Nav.Link><Link className="text text-white" to="/register">Register</Link></Nav.Link>
                        <Nav.Link><Link className="text text-white" to="/search">Search</Link></Nav.Link>
                        </ul>
                        

                    </Nav>
                </Navbar>
            
        )
    }
}

export default Navigation;