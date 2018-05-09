import {Meteor} from 'meteor/meteor';
<<<<<<< HEAD:imports/api/profiles/methods.jsx


=======
import { Accounts } from 'meteor/accounts-base';
 
Meteor.methods({
    'users.create':(user)=>{
        Accounts.createUser(user);
    }
})
>>>>>>> 0f44de0a2b1bf4afa9b06983faea2f038eac3295:imports/api/profiles/methods.js
