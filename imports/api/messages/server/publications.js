import {Meteor} from 'meteor/meteor';
import Messages from '../collections.js';

Meteor.publish('messages',()=>{
  return Messages.find();
})
