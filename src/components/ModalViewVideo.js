import React, { Component } from 'react';
import Modal from "react-modal";
import './ModalViewVideo.css';
import {getImageSrc} from "../utilities";
import YoutubeVideo from "./YoutubeVideo";
import ModalCastView from "./ModalCastView";
import ButtonRound from "./ButtonRound";

class ModalViewVideo extends Component {

    constructor() {
        super();

        this.state = {
            isVideoRendered: false
        };
    }

    handleVideoRenderingSuccess = () => {
        this.setState({
            isVideoRendered: true
        });
    };

    render() {

        return (
            <Modal
                isOpen={true}
                onRequestClose={this.props.hideModal}
                className={`modal-body ${this.state.isVideoRendered ? '' : 'padded'}`}
                overlayClassName="modal-overlay"
                contentLabel={this.props.video.title}
            >
                <img src={getImageSrc(this.props.video.media)} alt="Poster" className="modal-poster"/>

                <button
                    className={`modal-close-button ${this.state.isVideoRendered ? '' : 'button-dark'}`}
                    title="Close"
                    onClick={this.props.hideModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </button>

                <YoutubeVideo
                    video={this.props.video}
                    successRender={this.handleVideoRenderingSuccess}
                />

                <div className="modal-body-wrapper">
                    <h2>{this.props.video.title}</h2>
                    <div className="release-data">
                        <div className="item">
                            <header>Release</header>
                            <div className="caption">{getYear(this.props.video.release)}</div>
                        </div>
                        <div className="item">
                            <header>Rating</header>
                            <div className="caption">{this.props.video.rating}</div>
                        </div>
                        <div className="item">
                            <header>Length</header>
                            <div className="caption">{this.props.video.length}</div>
                        </div>
                    </div>
                    <div className="text-content">
                        <p>Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.</p>
                    </div>
                    <ButtonRound
                        customClassName="edit-content"
                        onClick={false}
                        type="edit"
                        caption="Edit"
                    />
                </div>
                <ModalCastView
                    cast={this.props.video.cast}
                />
            </Modal>
        )
    }
}

const getYear = (dateString) => {
    return new Date(Date.parse(dateString)).getFullYear()
};

export default ModalViewVideo;
