import {Meteor} from 'meteor/meteor';
import Pets from './collections.js';
import { check } from 'meteor/check';

Meteor.methods({
  'pets.create': (pet)=>{
    Pets.insert(pet);
  }
})

Meteor.methods({
  'pets.delete': (pet)=> Pets.remove(pet)
});

Meteor.methods({
  'users.delete': (user)=> Users.remove(user)
});

Meteor.methods({
  updatePet( pet ) {
    check( pet, Object );
    console.log('updatePet pet=', pet);

    try {
      var documentId = Pets.update( pet._id, {
        $set: {
          'petName': pet.petName ,
          'price': pet.price ,
          'paid': pet.paid
        }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
