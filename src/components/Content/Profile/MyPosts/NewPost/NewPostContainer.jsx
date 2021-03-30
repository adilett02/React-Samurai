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

        let onPostChange = () => {
          let text = newPostElement.current.value;
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        let newPostElement = React.createRef();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <NewPost
            addPost={addPost}
            onPostChange={onPostChange}
            newPostElement={newPostElement}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
