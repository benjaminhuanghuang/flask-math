import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//
import Header from './components/Header';
import RequireAuth from './components/RequireAuth';
import Login from './modules/auth/Login';

import Dashboard from './modules/dashboard';


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={RequireAuth(Dashboard)} />
            </div>
       </BrowserRouter>
    );
  }
}
