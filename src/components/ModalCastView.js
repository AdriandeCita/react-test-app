import React, { Component } from 'react';
import './ModalCastView.css';
import ModalCastViewCharacter from "./ModalCastViewCharacter";
import ButtonRound from "./ButtonRound";

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
                    <ButtonRound
                        customClassName="add-character modal-cast-character"
                        onClick={false}
                        type="add"
                        caption="Add"
                    />
                </div>
            </div>
        )
    }
}

export default ModalCastView;
