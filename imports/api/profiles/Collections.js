import {Mongo} from 'meteor/mongo';

const Users = new Mongo.Collection('profiles');

export default Users;