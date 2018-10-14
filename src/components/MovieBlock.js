import React from 'react';
import './MovieBlock.css';
import {getMediaSrc} from "../utilities";

const MovieBlock = ({ video, offsetTop, selected, activeModal, showVideo }) => (
    <div className={`movie-block ${selected ? 'selected' : ''} ${(activeModal.modalType && !isCurrentVideoOpened(video, activeModal.modalProps)) ? 'hidden' : ''}`}>
        <div className="movie-timeline"></div>
        <div
            className="movie-item"
            style={offsetStyle(offsetTop)}
            onClick={showVideo}
        >
            <img src={getMediaSrc(video.media, 'image')} alt="" className="movie-item-bg"/>
            <div className="movie-item-caption-container">
                <div className="movie-item-caption">{video.title}</div>
            </div>
        </div>
        <div className="movie-date-mark">{formatDate(video.release)}</div>
    </div>
);

const isCurrentVideoOpened = (currentVideo, modalProp) => {
    return modalProp && modalProp.video === currentVideo;
};

const formatDate = (dateString) => {
    const date = new Date(Date.parse(dateString));
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const offsetStyle = (offset) => ({
    top: `calc(0.01 * ${offset} * (100% - 214px))`
});

export default MovieBlock;
