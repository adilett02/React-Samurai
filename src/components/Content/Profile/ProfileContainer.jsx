import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import Me from './Me/Me';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUsersProfile(response.data);
      console.log(response);
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
export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
