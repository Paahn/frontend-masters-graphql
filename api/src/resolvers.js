/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets() {
      return {
        id: '3d9o0W2b7t8Cw1',
        createdAt: 9,
        name: 'Floppsy',
        type: 'Rabbit'
      }
    }
  },
  Mutation: {
    
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {
    
  }
}
