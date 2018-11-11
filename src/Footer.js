import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Nav />
            </footer>
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


export default Footer;