import {Meteor} from 'meteor/meteor';
import Messages from './collections.js';

Meteor.methods({
  'messages.create': (message)=>{
    Messages.insert(message);
  }
})

Meteor.methods({
  'messages.delete': (message)=> Messages.remove(message)
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
