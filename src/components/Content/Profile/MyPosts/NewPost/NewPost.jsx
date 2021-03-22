import React from 'react';
import classes from './NewPost.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profileReducer';




const NewPost = (props) => {


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }


    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    return (
        <div className="new__post">
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <button onClick={addPost}> Отправить</button>
        </div>
    )
}

export default NewPost;


