import React    from 'react';
import {Query} from "react-apollo";
import {gql} from "apollo-boost";
import MovieListContainer from "../containers/MovieList";

const MovieListLoader = () => (

    <Query
        query={gql`{
            movies {
              items {
                title
                rating
                cast {
                  id
                }
                release
                trivia {
                  universeTimeline
                }
                media {
                  type
                  src
                }
              }
            }
        }`}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
                <MovieListContainer
                    videos={data.movies.items}
                />
            );
        }}
    </Query>
);

export default MovieListLoader;
