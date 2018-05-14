import {Meteor} from 'meteor/meteor';
import Pets from '../collections.js';

Meteor.publish('pets',()=>{
  return Pets.find();
})
