import React from 'react';
import {getImageSrc} from "../utilities";

const FilterActionItem = ({character, active, onClick}) => (

    <div
        className={'filter-action ' + (active ? 'active' : '')}
        onClick={onClick}
    >
        <div className="character-portrait">
            <img src={getImageSrc(character.media)} alt="" />
        </div>
        <div className="action-caption">{character.name}</div>
    </div>
);

export default FilterActionItem;
