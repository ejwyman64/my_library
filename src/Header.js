import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class Header extends Component { 
    render() {
        return (
            <header className="App-header">
                <h1 className="appTitle">My Library and Friends</h1>
                <Nav />
            </header>
        );
    }
}

class Nav extends Component {
    render() {
        return (
            <nav>
            {/* Need to install React Router for the navigation function. */}
                    {/* <NavLink href="#">Profile</NavLink>
                    <NavLink href="#">Friends</NavLink>
                    <NavLink href="#">Lends</NavLink> */}
            </nav>
        );
    }
}


export default Header;