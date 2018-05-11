import {Meteor} from 'meteor/meteor';
import Pets from './collections.js';

Meteor.methods({
    'pets.create': (pet)=>{
        Pets.insert(pet);
    }
})




