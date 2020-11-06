const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
      id: ID!
      username: String!
    }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  type Onesie {
    type: String!
    size: Int!
  }
  
  type Query {
    pets: [Pet]!
    onesies(): [Onesie]!
  }
`;

module.exports = typeDefs
