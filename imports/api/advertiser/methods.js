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

Meteor.methods({
  updateItem( item ) {
    check( item, Object );
    console.log('updateItem item=', item);

    try {
      var documentId = Items.update( item._id, {
        $set: {
          'price': item.price ,
          'paid': item.paid
        }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
