import React, { Component } from 'react';
import gql from 'graphql-tag';
import './ModalCastViewCharacter.css';
import {Query} from "react-apollo";
import {getImageSrc} from "../utilities";

class ModalCastViewCharacter extends Component {

    render() {
        return (
            <Query
                query={gql`{
                    character(id: "${this.props.characterId}") {
                      id
                      name
                      castName
                      media {
                        type
                        src
                      }
                    }
                }`}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <div className="modal-cast-character">
                            <div className="image">
                                <img src={getImageSrc(data.character.media)} alt=""/>
                            </div>
                            <div className="caption">
                                <div className="name">{data.character.name}</div>
                                <div className="character-name">{data.character.castName}</div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default ModalCastViewCharacter;
