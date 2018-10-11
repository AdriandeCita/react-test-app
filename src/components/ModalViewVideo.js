import React, { Component } from 'react';
import Modal from "react-modal";
import './ModalViewVideo.css';
import {getImageSrc} from "../utilities";
import YoutubeVideo from "./YoutubeVideo";

class ModalViewVideo extends Component {

    render() {
        return (
            <Modal
                isOpen={true}
                onRequestClose={this.props.hideModal}
                className="modal-body"
                overlayClassName="modal-overlay"
                contentLabel={this.props.video.title}
            >
                <img src={getImageSrc(this.props.video.media)} alt="" className="modal-poster"/>
                <button className="modal-close-button" title="Close" onClick={this.props.hideModal}>&times;</button>
                <YoutubeVideo
                    video={this.props.video}
                />

                <div className="modal-body-wrapper">
                    <h2>{this.props.video.title}</h2>
                    <div className="release-data">
                        <div className="item">
                            <header>Release</header>
                            <div className="caption">{this.props.video.release}</div>
                        </div>
                        <div className="item">
                            <header>Rating</header>
                            <div className="caption">{this.props.video.rating}</div>
                        </div>
                        {/*<div className="item">*/}
                            {/*<header>Length</header>*/}
                            {/*<div className="caption"></div>*/}
                        {/*</div>*/}
                    </div>
                    <p>Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.</p>
                    <div className="modal-controls edit-content control-edit">
                        Edit
                    </div>
                    <div className="modal-cast-block">
                        <header>Cast</header>
                        <div className="content">

                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalViewVideo;
