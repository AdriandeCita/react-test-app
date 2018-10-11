import React from 'react';
import FilterByCharacterItem from "../containers/FilterByCharacterItem";

const CharactersFilter = ({ characters }) => (
    <div className="filter-by-character">
        {characters.slice(0, 4).map((character) =>
            <FilterByCharacterItem
                character={character}
                key={character.id}
            />
        )}
    </div>
);

export default CharactersFilter;
