directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE

enum CacheControlScope {
  PUBLIC
  PRIVATE
}

type Character {
  id: ID!
  name: String
  castName: String
  media: [Media]
  movies: [Movie]
}

type CommandResponse {
  type: String!
  aggregateId: ID!
  aggregateName: String!
}

scalar Date

input ImportCommand {
  source: String
}

type Media {
  type: String
  src: String
}

type Movie {
  title: String
  cast: [Character]
  rating: Float
  release: Date
  trivia: Trivia
  media: [Media]
}

type Mutation {
  import(input: ImportCommand): CommandResponse
}

type Query {
  movies: QueryMovies
  movie(id: ID): Movie
  character(id: ID): Character
  characters: QueryCharacters
}

type QueryCharacters {
  items: [Character]
}

type QueryMovies {
  items: [Movie]
}

type Trivia {
  universeTimeline: String
}

# The `Upload` scalar type represents a file upload promise that resolves an
# object containing `stream`, `filename`, `mimetype` and `encoding`.
scalar Upload

