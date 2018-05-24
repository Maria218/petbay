import {Meteor} from 'meteor/meteor';
import Pets from './collections.js';

Meteor.methods({
  'pets.create': (pet)=>{
    Pets.insert(pet);
  }
})

Meteor.methods({
  'pets.delete': (pet)=> Pets.remove(pet)
});

// Meteor.methods({
//   'pets.edit': (pet) => {
//     Pets.update(pet)
//   }
// })

// Meteor.methods({
//   'pets.edit': (pet) => {
//
//     pet = Pets.find().fetch();
//     const myId = pet[0]._id
//     Pets.update(myId);
//     var findPets = MyCollection.find().fetch();
//     console.log(findUpdatedCollection);
//   }
// })

// Meteor.methods({
//   'pets.edit': (params) => {
//     const pet = Pets.findOne({_id: params.id });
//     Pets.update(pet._id, {
//       $set: {
//         title: params.title
//        }
//     });
//   },
// });
