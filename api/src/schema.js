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
    colour: String
  }

  input OnesieInput {
    type: String
    size: Int
    colour: String
  }
  
  type Query {
    pets: [Pet]!
    onesies(input: OnesieInput): [Onesie]!
    sizes(input: OnesieInput): [Onesie]!
  }
`;

module.exports = typeDefs
