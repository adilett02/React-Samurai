import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { auth } from '../../redux/authReducer';

class HeaderConatiner extends React.Component {
  componentDidMount() {
    this.props.auth();
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { auth })(HeaderConatiner);
