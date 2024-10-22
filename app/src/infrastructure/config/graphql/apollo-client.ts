import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Remplacez par l'URL de votre serveur GraphQL
    cache: new InMemoryCache(),
});

export default client;
