import Modal from 'react-modal';
import React from 'react';
import './ModalView.css';
import {getMediaSrc} from "../utilities";
import ModalDescription from "../containers/ModalDescription";
import ModalPoster from "../containers/ModalPoster";
import ModalVideo from "../containers/ModalVideo";
import FormVideoDescription from "../containers/FormVideoDescription";
import FormAddCharacter from "../containers/FormAddCharacter";
import ModalCast from "../containers/ModalCast";

const ModalView = ({video, hideModal, visibleDescriptionForm}) => {
    const modalDescription = (
        visibleDescriptionForm
            ? <FormVideoDescription/>
            : <ModalDescription/>
    );

    return (
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

            {modalDescription}

            <ModalCast
                cast={video.cast}
            />
            <FormAddCharacter/>

        </Modal>
    )
};

export default ModalView;
