const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
      id: ID!
      username: String!
      pets: [Pet]!
    }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    owner: User!
  }

  type Onesie {
    type: String!
    size: Int!
    colour: String
    brand: String
  }

  input OnesieInput {
    type: String
    size: Int
    colour: String
    brand: String
  }

  input PetInput {
    id: ID
    createdAt: String
    name: String
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
  }
  
  type Query {
    pets: [Pet]!
    inputPets(input: PetInput): [Pet]!
    onesies(input: OnesieInput): [Onesie]!
    sizes(input: OnesieInput): [Onesie]!
    brands(input: OnesieInput): [Onesie]!
    pet(input: PetInput): Pet
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
  }
`;

module.exports = typeDefs
