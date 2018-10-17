import React from 'react';
import FilterByCharacterItem from "../containers/FilterByCharacterItem";

const FilterByCharacter = ({characters}) => (
    <div className="filter-by-character">
        {characters.map((character) =>
            <FilterByCharacterItem
                character={character}
                key={character.id}
            />
        )}
    </div>
);

export default FilterByCharacter;
