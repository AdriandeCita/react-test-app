import React, { Component } from 'react';
import './ModalCast.css';
import ModalCastCharacter from "./ModalCastCharacter";
import ButtonRound from "./ButtonRound";

class ModalCast extends Component {

    render() {
        return (
            <div className="modal-cast-block">
                <header>Cast</header>
                <div className="content">
                    {this.props.cast.map((character, index) => {
                        return (
                            <ModalCastCharacter
                                characterId={character.id}
                                key={index}
                            />
                        )
                    })}
                    <ButtonRound
                        customClassName="add-character modal-cast-character"
                        onClick={() => {}}
                        type="add"
                        caption="Add"
                    />
                </div>
            </div>
        )
    }
}

export default ModalCast;
