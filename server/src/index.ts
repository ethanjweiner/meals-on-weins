import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import mocks from './mocks.ts';

async function startServer() {
  const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

startServer();
