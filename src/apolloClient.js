import ApolloClient from 'apollo-boost';
import {InMemoryCache} from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'http://starwars.asteriainc.se/graphql',
    clientState: {
        cache: cache
    }
});

export default client;