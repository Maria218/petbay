import {Mongo} from 'meteor/mongo';

const Pets = new Mongo.Collections('pets');
export default Pets;
