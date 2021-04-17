import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import Me from './Me/Me';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfile } from '../../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setProfile(userId);
  }
  render() {


    return <Profile {...this.props} profile={this.props.profile} />;
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};


export default compose(
  connect(mapStateToProps, { setProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)