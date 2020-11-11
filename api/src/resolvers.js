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
    },
    brands(_, {input}) {
      return [
        { type: 'Shark', size: 6, colour: 'Blue', brand: 'Adidas'},
        { type: 'Bat', size: 3, colour: 'Black', brand: 'Adidas'},
        { type: 'WonderCat', size: 3, colour: 'Yellow', brand: 'Burberry'},
        { type: 'Viking', size: 15, colour: 'Black', brand: 'Versace'}
      ].filter( brand => brand.brand === input.brand)
    },
    pet(_, {input}) {
      return [
        { id: '33nD8', createdAt: '11-11-2020', name: 'Rotahn', type: 'Aligator'},
        { id: '33nD9', createdAt: '10-11-2020', name: 'Dani', type: 'Mouse'},
        { id: '33nD10', createdAt: '09-11-2020', name: 'Frell', type: 'Hermit Crab'},
        { id: '33nD11', createdAt: '10-11-2020', name: 'Toto', type: 'Giraffe'},
        { id: '33nD12', createdAt: '11-11-2020', name: 'Klari', type: 'Anaconda'},
        { id: '33nD13', createdAt: '11-10-2020', name: 'Juke', type: 'Anteater'},
        { id: '33nD14', createdAt: '01-11-2020', name: 'Olkorbab', type: 'Water Demon'}
      ].filter( pet => pet.name === input.name)
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
