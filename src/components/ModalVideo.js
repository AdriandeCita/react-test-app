import React from 'react';
import ButtonRound from "./ButtonRound";
import "./ModalPoster.css";
import YoutubeVideo from "./YoutubeVideo";

const ModalVideo = ({ path }) => {
    if (path) {
        return (
            <YoutubeVideo
                video={path}
            />
        )
    } else {
        return (
            <div className="player-wrapper">
                <ButtonRound
                    onClick={() => {}}
                    type="link"
                    customClassName="trailer-button"
                    caption="Add Trailer"
                />
            </div>
        )
    }
};

export default ModalVideo;
