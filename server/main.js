import { Meteor } from 'meteor/meteor';
import '/imports/startup/server/index.js';
import { Accounts } from 'meteor/accounts-base';



Meteor.startup(() => {
	Meteor.publish('allUsers', ()=> {
    cursor = Meteor.users.find({});
    console.log(cursor.count());
    return cursor;
});

});
