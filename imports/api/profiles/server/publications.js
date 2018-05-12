import {Meteor} from 'meteor/meteor';
import Pets from '../collections.js';

Meteor.publish('pets',()=>{
    let currentUserId = this.userId;
    return Pets.find();
})