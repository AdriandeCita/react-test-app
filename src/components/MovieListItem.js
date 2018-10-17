import React, {Component} from 'react';
import './MovieListItem.css';
import {getMediaSrc} from "../utilities";

class MovieListItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.showVideo(this.props.video);
    }

    render() {
        return (
            <div className={`movie-block ${this.props.selected ? 'selected' : ''} ${(this.props.activeModal.modalType && !isCurrentVideoOpened(this.props.video, this.props.activeModal.modalProps)) ? 'hidden' : ''}`}>
                <div className="movie-timeline"></div>
                <div
                    className="movie-item"
                    style={offsetStyle(this.props.offsetTop)}
                    onClick={this.handleClick}
                >
                    <img src={getMediaSrc(this.props.video.media, 'image')} alt="" className="movie-item-bg"/>
                    <div className="movie-item-caption-container">
                        <div className="movie-item-caption">{this.props.video.title}</div>
                    </div>
                </div>
                <div className="movie-date-mark">{formatDate(this.props.video.release)}</div>
            </div>
        )
    }
}

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

export default MovieListItem;
