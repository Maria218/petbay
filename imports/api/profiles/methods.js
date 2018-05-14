import {Meteor} from 'meteor/meteor';
import Pets from './collections.js';

Meteor.methods({
    // const currentUserId = Meteor.userId();
    'pets.create': (pet)=>{
        Pets.insert(pet);
    }
})
