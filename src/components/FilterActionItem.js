import React from 'react';

const getImageSrc = (characterMedia) => {
    for (let i = 0; i < characterMedia.length; i++) {
        if (characterMedia[i].type === 'image') {
            return characterMedia[i].src;
        }
    }

    return '';
};

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
