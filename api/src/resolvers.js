/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, {type}, context) {
      return context.models.Pet.findMany()
    },
    onesies(_, {input}) {
      return [
        { type: 'Shark', size: 6, colour: 'Blue'},
        { type: 'Bat', size: 3, colour: 'Black'},
        { type: 'WonderCat', size: 3, colour: 'Yellow'}
      ].filter(onesie => onesie.type === input.type)
    },
    sizes(_, {input}) {
      return [
        { type: 'Shark', size: 6, colour: 'Blue'},
        { type: 'Bat', size: 3, colour: 'Black'},
        { type: 'WonderCat', size: 3, colour: 'Yellow'}
      ].filter(size => size.size === input.size)
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
