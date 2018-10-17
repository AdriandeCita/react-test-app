import React from 'react';
import {getMediaSrc} from "../utilities";

const FilterByCharacterItem = ({character, active, onClick, activeModal}) => (

    <div
        className={`filter-action ${active ? 'active' : ''} ${activeModal.modalType ? 'hidden' : ''}`}
        onClick={onClick}
    >
        <div className="character-portrait">
            <img src={getMediaSrc(character.media, 'image')} alt="" />
        </div>
        <div className="action-caption">{character.name}</div>
    </div>
);

export default FilterByCharacterItem;
