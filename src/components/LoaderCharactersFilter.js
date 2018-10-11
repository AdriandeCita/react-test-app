import React from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import CharactersFilter from "./CharactersFilter";

const LoaderCharactersFilter = () => (
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
                <CharactersFilter
                    characters={data.characters.items}
                />
            );
        }}
    </Query>
);

export default LoaderCharactersFilter;
