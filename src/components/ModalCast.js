import React, {Component} from 'react';
import './ModalCast.css';
import ModalCastCharacterItem from "./ModalCastCharacterItem";
import ModalButtonRound from "./ModalButtonRound";

class ModalCast extends Component {

    render() {
        return (
            <div className="modal-cast-block">
                <header>Cast</header>
                <div className="content">
                    {this.props.cast.map((character, index) => {
                        return (
                            <ModalCastCharacterItem
                                characterId={character.id}
                                key={index}
                            />
                        )
                    })}
                    <ModalButtonRound
                        customClassName="add-character modal-cast-character"
                        onClick={this.props.showCharacterForm}
                        type="add"
                        caption="Add"
                    />
                </div>
            </div>
        )
    }
}

export default ModalCast;
