import '/imports/startup/client/index.js';
import { Tracker } from 'meteor/tracker';
import {onAuthChange, routes} from "../imports/routing/router.js";

Tracker.autorun(function(){
    const authenticated = !! Meteor.userId();
    onAuthChange(authenticated);
});
