import React from 'react';
import classes from './NewPost.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profileReducer';
import NewPost from './NewPost';




const NewPostContainer = (props) => {
    let state = props.store.getState();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }


    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    return (<NewPost addPost={addPost} onPostChange={onPostChange} newPostElement={newPostElement} newPostText={state.profilePage.newPostText} />)
}

export default NewPostContainer;


