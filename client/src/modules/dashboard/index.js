import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <h1>Who are you?</h1>
        );
    }
}


function mapStateToProps(state) {
    return {};
}


export default connect(mapStateToProps)(Dashboard);
