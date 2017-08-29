import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//
import {Layout} from 'antd';
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
                <Layout style={{backgroundColor: 'white', padding: '0px', height: '48px'}}>
                    <Header/>
                </Layout>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={RequireAuth(Dashboard)} />
            </div>
       </BrowserRouter>
    );
  }
}
