import {Meteor} from 'meteor/meteor';
import Items from './collections.js';

Meteor.methods({
  'items.create': (item)=>{
    Items.insert(item);
  }
})

Meteor.methods({
  'items.delete': (item)=> Items.remove(item)
});

Meteor.methods({
  'items.edit': (params) => {
    const item = Items.findOne({_id: params.id });
    Items.update(item._id, {
      $set: {
        title: params.title
       }
    });
  },
});
