import React from 'react';
import ModalButtonRound from "./ModalButtonRound";
import "./ModalPoster.css";
import YoutubeVideoView from "./YoutubeVideoView";
import PopoverTrailer from "../containers/PopoverTrailer";

const ModalVideoView = ({path, showPopover}) => {
    if (path) {
        return (
            <YoutubeVideoView
                video={path}
            />
        )
    } else {
        return (
            <div className="player-wrapper">
                <ModalButtonRound
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

export default ModalVideoView;
