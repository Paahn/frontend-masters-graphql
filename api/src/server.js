const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen(1989).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
