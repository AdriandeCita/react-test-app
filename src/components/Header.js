import React from 'react';
import logo from '../logo.svg';
import './Header.css'
import SortByDate from "../containers/SortByDateItem";
import {VideoOrders} from "../actions";
import FilterByCharacterLoader from "./FilterByCharacterLoader";

const Header = () => (
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

            <FilterByCharacterLoader/>
        </div>
    </header>
);

export default Header;
