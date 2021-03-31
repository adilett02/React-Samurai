import React from 'react';
import classes from './NewPost.module.css';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../../../../redux/profileReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
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
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
