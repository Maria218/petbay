import {Meteor} from 'meteor/meteor';
import Users from './Collections.jsx';

Meteor.methods({
    'users.create':(user)=>{
        Users.insert(user);
    }
})
