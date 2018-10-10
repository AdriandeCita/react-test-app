import React from 'react';
import FilterByCharacter from "../containers/FilterByCharacter";
import gql from 'graphql-tag';
import { Query } from "react-apollo";

const CharactersFilter = () => (
    <Query
        query={gql`{
            characters {
                items {
                    id
                    name
                    castName
                    media {
                        type
                        src
                    }
                    movies {
                        title
                    }
                }
            }
        }`}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
                <div className="filter-by-character">
                    {data.characters.items.slice(0, 3).map((character) =>
                        <FilterByCharacter
                            filter={character.name}
                            character={character}
                        />
                    )}
                </div>
            );
        }}
    </Query>
);

export default CharactersFilter;
