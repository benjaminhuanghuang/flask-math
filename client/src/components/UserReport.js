import _ from 'lodash';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class UserReport extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={classNames(styles.content)}>
        User Report
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    appConfig: state.app.appConfig
  };
};


export default connect(mapStateToProps)(UserReport);
