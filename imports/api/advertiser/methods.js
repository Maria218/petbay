import {Meteor} from 'meteor/meteor';
import Items from './collections.js';

Meteor.methods({
  'items.create': (pet)=>{
    Items.insert(pet);
  }
})

Meteor.methods({
  'items.delete': (item)=> Items.remove(pet)
});

Meteor.methods({
  'items.edit': (params) => {
    const item = Items.findOne({_id: params.id });
    Items.update(pet._id, {
      $set: {
        title: params.title
       }
    });
  },
});
