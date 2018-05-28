import {Meteor} from 'meteor/meteor';
import Pets from '../collections.js';
import {UserFiles} from  '../../upload/collections.js'

Meteor.publish('pets',()=>{
  return Pets.find();
})

Meteor.publish('files.all', ()=>{
  return UserFiles.find().cursor;
});

// Meteor.publish('userData', () => {
//   return Meteor.users.find();
// });
