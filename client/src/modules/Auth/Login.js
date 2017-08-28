import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import * as actions from './AuthActions';

// Import Style
import styles from './Login.css';
import { Card,Input,Icon,Button } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };

        this.login = this.login.bind(this);
    }

    login() {
        const {username, password} = this.state;
        this.props.loginUser({username, password});
        this.props.history.push("/");
    }

    render() {
        return (
            <div style={{
                backgroundImage: 'url("/asserts/bgclass4.jpg")',
                        opacity: '1',
                backgroundColor: '#000000',
             backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                         margin: '0 auto',
                      textAlign: 'center',
                          width: '100%',
                         height: '900px'
                  }}>

                <div style={{
                      position: 'relative',
                      margin : 'auto',
                      opacity: '0.85',
                      width: '100%',
                      zIndex: 1
                   }}>


                    <Card title="Log in to Afficient Academy" style={{
                 // position: 'relative',
                  width: '320px',
                  top:'100px',
                  margin: 'auto',
                  fontSize: '14px'
                  }}>
                        <p style={{padding: '10px'}}>
                            <Input placeholder="Username"
                                   onChange={(e) => {this.setState({username:e.target.value})}}
                                   onPressEnter={this.login}
                            />
                        </p>
                        <p style={{padding: '10px'}}>
                            <Input placeholder="Password" type="password"
                                   onChange={(e) => {this.setState({password:e.target.value})}}
                                   onPressEnter={this.login}/></p>
                        <p style={{padding: '15px'}}>
                            <Button type="primary" onClick={this.login}>LOG IN</Button>
                        </p>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, actions)(withRouter(Login));
