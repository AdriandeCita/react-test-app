import React from 'react';
import ModalButtonRound from "./ModalButtonRound";
import "./ModalPoster.css";
import PopoverPoster from "../containers/PopoverPoster";

const ModalPoster = ({path, showPopover}) => {

    if (path) {
        return (
            <div className="modal-poster">
                <img src={path} alt="Poster" className="modal-poster"/>
            </div>
        )
    }

    return (
        <div className="modal-poster">
            <ModalButtonRound
                onClick={showPopover}
                type="link"
                customClassName="poster-button"
                caption="Add Poster"
            />
            <PopoverPoster/>
        </div>
    )
};

export default ModalPoster;
