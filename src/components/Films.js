import React, { Component } from 'react';
import MovieBlock from "./MovieBlock";
import './Films.css';

class Films extends Component {
    // movies = this.props.videos.map(video => (
    //     <MovieBlock
    //         caption={video.caption}
    //         lengthOffset={video.lengthOffset}
    //     />
    // ));

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
