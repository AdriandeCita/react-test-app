import React from 'react';
import './MovieBlock.css';
import {getImageSrc} from "../utilities";

const MovieBlock = ({ video, offsetTop, selected, showVideo }) => (
    <div className={`movie-block ${selected ? 'selected' : ''}`}>
        <div className="movie-timeline"></div>
        <div
            className="movie-item"
            style={offsetStyle(offsetTop)}
            onClick={showVideo}
        >
            <img src={getImageSrc(video.media)} alt="" className="movie-item-bg"/>
            <div className="movie-item-caption-container">
                <div className="movie-item-caption">{video.title}</div>
            </div>
        </div>
    </div>
);

const offsetStyle = (offset) => ({
    top: `calc(0.01 * ${offset} * (100% - 300px))`
});

export default MovieBlock;
