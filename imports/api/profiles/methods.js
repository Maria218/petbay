import {Meteor} from 'meteor/meteor';
import Pets from './collections.js';

Meteor.methods({
    'pets.create': (pet)=>{
        Pets.insert(pet);
    }
})
//
// Meteor.methods({
//   find_by_username: function(name){
//     var user = await Accounts.findUserByUsername(name);
//     return user;
//   }
// });
