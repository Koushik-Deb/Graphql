import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    # optional
    schema {
        query: Query
    }

    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const info = await startStandaloneServer(server, { listener: { port: 4000 } });

console.log(`🚀 Server ready at ${info.url}`);
