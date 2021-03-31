import React from 'react';
import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
