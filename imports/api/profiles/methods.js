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
//   'pets.edit': (params) => {
//     const pet = Pets.findOne({_id: params.id });
//     Pets.update(pet._id, {
//       $set: {
//         title: params.title
//        }
//     });
//   },
// });
