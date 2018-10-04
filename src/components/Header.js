import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css'

class Header extends Component {
    characterFilterItems = this.props.characters.map((character) =>
        <div className="filter-action">
            <div className="character-portrait">
                <img src="" alt="" />
            </div>
            <div className="action-caption">{character.name}</div>
        </div>
    );

    render() {
        return (
            <header className="main-header">
                <div className="wrapper">
                    <div className="filter-by-date">
                        <div className="filter-action active">Release Date</div>
                        <div className="filter-action">Chronological Order</div>
                    </div>
                    <img src={logo} alt="Starwars logo" className="logo"/>
                    <div className="filter-by-character">
                        {this.characterFilterItems}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
