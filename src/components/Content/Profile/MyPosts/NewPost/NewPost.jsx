import React from 'react';
import classes from './NewPost.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profileReducer';
import NewPostContainer from './NewPostContainer'




const NewPost = (props) => {

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    return (
        <div className="new__post">
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <button onClick={addPost}> Отправить</button>
        </div>
    )
}

export default NewPost;


