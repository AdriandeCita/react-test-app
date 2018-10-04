import React, { Component } from 'react';
import './MovieBlock.css';
import Movie from "./Movie";

class MovieBlock extends Component {
    render() {
        return (
            <div className="movie-block">
                <div className="movie-timeline">

                </div>
                <Movie
                    caption={this.props.caption}
                    lengthOffset={this.props.lengthOffset}
                />
            </div>
        );
    }
}

export default MovieBlock;
