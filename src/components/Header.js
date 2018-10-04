import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="land-header">
                Header is here!
                <img src={logo} alt="Starwars logo" className="logo"/>
            </header>
        );
    }
}

export default Header;
