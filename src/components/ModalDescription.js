import React from 'react';
import ModalButtonRound from "./ModalButtonRound";
import "./ModalPoster.css";

const ModalDescription = ({release, rating, length, title, description, showDescriptionForm}) => {
    const releaseBlock = release ? (
        <div className="item">
            <header>Release</header>
            <div className="caption">{getYear(release)}</div>
        </div>
    ) : null;
    const ratingBlock = rating ? (
        <div className="item">
            <header>Rating</header>
            <div className="caption">{rating}</div>
        </div>
    ) : null;
    const lengthBlock = length ? (
        <div className="item">
            <header>Length</header>
            <div className="caption">{length}</div>
        </div>
    ) : null;

    return (
        <div className="modal-body-wrapper">
            <h2>{title}</h2>
            <div className="release-data">
                {releaseBlock}
                {ratingBlock}
                {lengthBlock}
            </div>
            <div className="text-content">
                <p>{description}</p>
            </div>
            <ModalButtonRound
                customClassName="edit-content"
                onClick={showDescriptionForm}
                type="edit"
                caption="Edit"
            />
        </div>
    )
};

const getYear = (dateString) => {
    return new Date(Date.parse(dateString)).getFullYear()
};

export default ModalDescription;
