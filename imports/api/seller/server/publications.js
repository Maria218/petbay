import {Meteor} from 'meteor/meteor';
import Details from '../collections.js';

Meteor.publish('details',()=>{
  return Details.find();
});
