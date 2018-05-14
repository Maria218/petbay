import App from '/imports/ui/App.jsx';
export default createRouter(App);
import { createRouter } from 'meteor/cultofcoders:meteor-react-routing';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import route from './router.js';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Uploads from '/imports/ui/Upload.jsx';
import Home from '/imports/ui/Home.jsx';
import Login from '/imports/ui/LogIn.jsx';

const history = createBrowserHistory();
const unauthenticatedPages = [];
const authenticatedPages = ['/dashboard', '/upload'];

const publicPage = () => {
    if (Meteor.userId()) {
        history.replace('/dashboard');
    }
};

const privatePage = () => {
    if(! Meteor.userId()) {
       history.replace('/');
    }
};

export const routes = (
    <Router history = {history}>
        <Switch>
          <Route exact path='/' component= {Home} onEnter={publicPage}/>
          <Route exact path='/upload' component={Uploads} onEnter={publicPage}/>
          <Route exact path='/dashboard' render={ () => <Home greet='User'/> } onEnter={privatePage} />
          <Route component={Home}/>
        </Switch>
    </Router>
);

export const onAuthChange = (authenticated) => {
    console.log("isAuthenticated: ", authenticated);
    const path = history.location.pathname;
    // const isUnauthenticatedPage = unauthenticatedPages.includes(path);
    const isAuthenticatedPage = authenticatedPages.includes(path);
    if (authenticated) {   // pages: /signup and /
        console.log(`Authenticated user routed to the path dashboard`);
        history.replace('/dashboard');
    } else if (!authenticated) {
        console.log(`Unauthenticated user routed to the path /`);
        history.replace('/');
    }
};
