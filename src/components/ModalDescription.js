import React, { Component } from 'react';
import ButtonRound from "./ButtonRound";
import "./ModalPoster.css";

class ModalDescription extends Component {

    render() {

        const release = this.props.release ? (
            <div className="item">
                <header>Release</header>
                <div className="caption">{getYear(this.props.release)}</div>
            </div>
        ) : null;
        const rating = this.props.rating ? (
            <div className="item">
                <header>Rating</header>
                <div className="caption">{this.props.rating}</div>
            </div>
        ) : null;
        const length = this.props.length ? (
            <div className="item">
                <header>Length</header>
                <div className="caption">{this.props.length}</div>
            </div>
        ) : null;

        return (
            <div className="modal-body-wrapper">
                <h2>{this.props.title}</h2>
                <div className="release-data">
                    {release}
                    {rating}
                    {length}
                </div>
                <div className="text-content">
                    <p>Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.</p>
                </div>
                <ButtonRound
                    customClassName="edit-content"
                    onClick={() => {}}
                    type="edit"
                    caption="Edit"
                />
            </div>
        )
    }
}

const getYear = (dateString) => {
    return new Date(Date.parse(dateString)).getFullYear()
};

export default ModalDescription;
