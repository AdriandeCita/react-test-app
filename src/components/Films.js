import React, { Component } from 'react';
import MovieBlock from "./MovieBlock";
import './Films.css';

class Films extends Component {
    render() {
        return (
            <div className="films-container">
                <div className="wrapper">
                    <MovieBlock
                        caption={"Episode One"}
                        lengthOffset={100}
                    />
                    <MovieBlock
                        caption={"Episode Two"}
                        lengthOffset={40}
                    />
                    <MovieBlock
                        caption={"Episode Three and it's second part of name"}
                        lengthOffset={70}
                    />
                </div>
            </div>
        );
    }
}

export default Films;
