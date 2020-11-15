import ApolloClient from "apollo-boost";

// GraphQL API 주소 세팅
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default client;