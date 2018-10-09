import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css'
import SortByDate from "../containers/SortByDate";
import {VideoOrders} from "../actions";
import FilterByCharacter from "../containers/FilterByCharacter";

class Header extends Component {
    characterFilterItems = this.props.characters.map((character) =>
        <FilterByCharacter
            filter={character.name}
            character={character}
        />
    );

    render() {
        return (
            <header className="main-header">
                <div className="wrapper">
                    <div className="sort-by-date">
                        <SortByDate
                            sorter={VideoOrders.RELEASE_DATE}>Release Date</SortByDate>
                        <SortByDate
                            sorter={VideoOrders.CHRONOLOGICAL}>Chronological Order</SortByDate>
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
