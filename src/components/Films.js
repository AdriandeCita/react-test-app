import React, { Component } from 'react';
import MovieBlock from "./MovieBlock";

class Films extends Component {
    render() {
        return (
            <div className="films-container">
                Movies are here!
                <div className="wrapper">
                    <MovieBlock/>
                    <MovieBlock/>
                    <MovieBlock/>
                </div>
            </div>
        );
    }
}

export default Films;
