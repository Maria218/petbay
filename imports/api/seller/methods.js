import {Meteor} from 'meteor/meteor';
import Details from './collections.js';

Meteor.methods({
  'details.create': (detail)=>{
    Details.insert(detail);
  }
})

// Meteor.methods({
//   'pets.delete': (pet)=> Pets.remove(pet)
// });
