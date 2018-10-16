import React from 'react';
import ButtonRound from "./ButtonRound";
import "./ModalPoster.css";
import YoutubeVideo from "./YoutubeVideo";
import PopoverTrailer from "../containers/PopoverTrailer";

const ModalVideo = ({ path, showPopover }) => {
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
                    onClick={showPopover}
                    type="link"
                    customClassName="trailer-button"
                    caption="Add Trailer"
                />
                <PopoverTrailer/>
            </div>
        )
    }
};

export default ModalVideo;
