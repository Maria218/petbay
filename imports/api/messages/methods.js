import {Meteor} from 'meteor/meteor';
import Messages from './collections.js';

Meteor.methods({
  'messages.create': (message)=>{
    Messages.insert(message);
    console.log("Done");
  }
})

Meteor.methods({
  'messages.delete': (message)=> Messages.remove(message)
});
