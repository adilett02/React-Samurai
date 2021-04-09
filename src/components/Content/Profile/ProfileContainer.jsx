import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import Me from './Me/Me';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
      this.props.setUsersProfile(response.data);
    });
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUsersProfile })(withUrlDataContainerComponent);
