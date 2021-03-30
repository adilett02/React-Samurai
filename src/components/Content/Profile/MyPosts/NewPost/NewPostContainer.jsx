import React from 'react';
import classes from './NewPost.module.css';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../../../../redux/profileReducer';
import NewPost from './NewPost';
import StoreContext from '../../../../../StoreContext';

const NewPostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <NewPost
            addPost={addPost}
            onPostChange={onPostChange}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
