import {Meteor} from 'meteor/meteor';
import {UserFiles} from './collections.js';

Meteor.methods({
  'pets.create': (pet)=>{
    Pets.insert(pet);
  }
})

Meteor.methods({
  'pets.delete': (pet)=> Pets.remove(pet)
});
