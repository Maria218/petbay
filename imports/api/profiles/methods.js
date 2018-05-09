import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
 
Meteor.methods({
    'users.create':(user)=>{
        Accounts.createUser(user);
    }
})
