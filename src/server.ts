import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { productResolvers, schema } from "./graphql";

const server = new ApolloServer({ typeDefs: schema, resolvers: {...productResolvers} });

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((data) =>
console.log(`🚀  Server ready at: ${data.url}`)
);
