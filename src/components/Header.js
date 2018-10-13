import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css'
import SortByDate from "../containers/SortByDate";
import {VideoOrders} from "../actions";
import LoaderCharactersFilter from "./LoaderCharactersFilter";

class Header extends Component {

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
                    <a href="/" className="logo">
                        <img src={logo} alt="Starwars logo"/>
                    </a>

                    <LoaderCharactersFilter/>
                </div>
            </header>
        );
    }
}

export default Header;
