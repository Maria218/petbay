import {Mongo} from 'meteor/mongo';

const Pets = new Mongo.Collection('pets');
export default Pets;
