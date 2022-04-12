import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "http://localhost:8080/graphql",
    uri: "https://still-ravine-42221.herokuapp.com",
    cache: new InMemoryCache(),
});

export default client;