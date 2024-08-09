In server.js

0. schema is optional which is used to define the schema for the server.
1. typeDefs represents the schema definition for the GraphQL API.
2. resolvers are the functions that are executed when a query is performed.
3. The ApolloServer constructor requires two parameters: typeDefs and resolvers.
4. The server.listen method is called to start the server.
5. The server.listen method will return a Promise that resolves to an object with a url key.
6. The url key contains the URL of the server.
