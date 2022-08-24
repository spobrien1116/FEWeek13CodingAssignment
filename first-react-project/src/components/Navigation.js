/* This file contains a Navbar with links (they don't go anywhere though). The navigation component should be 
at the top of the webpage. */

import React from 'react';

// Use this as a general import when using a navbar for the future.
// import {
//     Navbar,
//     Nav,
//     NavDropdown,
//     Container,
//     NavItem,
//     Form,
//     FormControl,
//     Button,
//   } from "react-bootstrap";

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FE Week 13 Coding Assignment</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home<span className="sr-only"> (current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Somewhere Else</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
