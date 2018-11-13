import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="titleSubtitle">
                    <h1 className="appTitle">My Friend Dewey:</h1>
                    <h2 className="titleSubscript">A digital personal library.</h2>
                </span>
                <Nav />
            </header>
        );
    }
}

class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/search">Search</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
            </div>
        );
    }
}


export default Header;