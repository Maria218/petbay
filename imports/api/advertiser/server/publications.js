import {Meteor} from 'meteor/meteor';
import Items from '../collections.js';

Meteor.publish('items',()=>{
  return Items.find();
})
