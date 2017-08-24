import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//

import * as actions from '../actions';

class App extends Component {
  componentDidMount(){

  }

  render() {
    return (
       <BrowserRouter>
        <div className="container">
          <div>App</div>
        </div>
       </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
