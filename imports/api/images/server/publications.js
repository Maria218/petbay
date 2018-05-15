import {Meteor} from 'meteor/meteor';
import Images from '../collections.js';

Meteor.publish('files.images.all', ()=> {
  return Images.find().cursor;
});
