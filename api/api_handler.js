const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const item = require('./item.js');

const resolvers = {
  Query: {
    productList: item.list,
    product: item.get,
  },
  Mutation: {
    productAdd: item.add,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
