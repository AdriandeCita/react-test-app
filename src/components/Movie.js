import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    offsetStyle = {
        top: `calc(0.01 * ${this.props.lengthOffset} * (100% - 300px))`
    };

    render() {
        return (
            <div className="movie-item" style={this.offsetStyle}>
                <img src="" alt="" className="movie-item-bg"/>
                <div className="movie-item-caption-container">
                    <div className="movie-item-caption">{this.props.caption}</div>
                </div>
            </div>
        );
    }
}

export default Movie;
