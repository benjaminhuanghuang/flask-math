import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { Menu as MenuAnt, Header as HeaderAnt, Icon, Row, Col, Modal, Button } from 'antd';

//
class Header extends Component {
    render() {
        return (
            <Row style={{ backgroundColor:'#404040', color:'#ffffff' }}>
                <Col xs={19} sm={17} md={19} lg={19} offset={1}>
                </Col>
                <Col xs={4} sm={6} md={4} lg={4}>
                    <MenuAnt theme="dark"  mode="horizontal" style={{ color:'#ffffff' }}>
                    <MenuAnt.Item style={{float:'right', marginRight:'80px'}}>
                       <Link  to="/login" key="login">Log In</Link>
                    </MenuAnt.Item>
                    </MenuAnt>
                </Col>
            </Row>
        );
    }
}

// function mapStateToProps(state){
//   return {
//     auth: state.auth
//   }
// }
function mapStateToProps({ auth }) {
    return {auth};
}
export default connect(mapStateToProps)(Header);
