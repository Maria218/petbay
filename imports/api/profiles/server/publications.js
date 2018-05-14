import {Meteor} from 'meteor/meteor';
import Pets from '../collections.js';

Meteor.publish('pets',()=>{
  // const currentUserId = this.userId;
  // return Pets.find({ createdBy: currentUserId });
  return Pets.find();
})
