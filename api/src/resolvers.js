/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pet(_, {input}, context) {
      console.log('QUERY => pet')
      return context.models.Pet.findOne(input)
    },
    pets(_, __, context) {
      return context.models.Pet.findMany()
    },
    inputPets(_, {input}, context) {
      return context.models.Pet.findMany(input)
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
    }
  },
  Mutation: {
    newPet(_, {input}, context) {
      const pet = context.models.Pet.create(input)
      return pet;
    }
  },
  Pet: {
    owner(pet, _, context) {
      console.log(`pet is ${JSON.stringify(pet)}`);
      return context.models.User.findOne()
    }
  },
  User: {
    pets(user, _, context) {
      console.log(`User => Pets`)
      return context.models.Pet.findMany()
    }
  }
}
