import React from 'react';
import Modal from "react-modal";
import './ModalViewVideo.css';
import {getMediaSrc} from "../utilities";
import ModalCast from "./ModalCast";
import ModalPoster from "./ModalPoster";
import ModalVideo from "./ModalVideo";
import ModalDescription from "./ModalDescription";

const ModalViewVideo = ({ video, hideModal }) => (
    <Modal
        isOpen={true}
        onRequestClose={hideModal}
        className="modal-body"
        overlayClassName="modal-overlay"
        contentLabel={video.title}
    >
        <ModalPoster path={getMediaSrc(video.media, "image")}/>

        <button
            className="modal-close-button"
            title="Close"
            onClick={hideModal}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>

        <ModalVideo path={getMediaSrc(video.media, "youtube")}/>

        <ModalDescription
            title={video.title}
            release={video.release}
            rating={video.rating}
            length={video.length}
        />

        <ModalCast
            cast={video.cast}
        />
    </Modal>
);

export default ModalViewVideo;
