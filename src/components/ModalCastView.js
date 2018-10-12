import React, { Component } from 'react';
import './ModalCastView.css';
import ModalCastViewCharacter from "./ModalCastViewCharacter";

class ModalCastView extends Component {

    render() {
        return (
            <div className="modal-cast-block">
                <header>Cast</header>
                <div className="content">
                    {this.props.cast.map((character, index) => {
                        return (
                            <ModalCastViewCharacter
                                characterId={character.id}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ModalCastView;
