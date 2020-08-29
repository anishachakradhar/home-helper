import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Category from './Category';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/category" component={Category} />
        </Switch>
      </div>
    )
  }
}
