const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    Type User {
        id: String!
        username: String
      }
  
      Type Pet {
        id: String!
        createdAt: Number
        name: String
        type: String
      }

`;

module.exports = typeDefs
