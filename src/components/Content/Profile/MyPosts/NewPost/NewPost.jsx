import React from 'react';
import classes from './NewPost.module.css';
// import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../../../redux/profileReducer';
import NewPostContainer from './NewPostContainer'




const NewPost = (props) => {


    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.dispatch(updateNewPostTextActionCreator(text));
    // }


    // let newPostElement = React.createRef();

    // let addPost = () => {
    //     props.dispatch(addPostActionCreator());
    // }
    
    return (
        <div className="new__post">
            <textarea onChange={props.onPostChange} ref={props.newPostElement} value={props.newPostText}></textarea>
            <button onClick={props.addPost}> Отправить</button>
        </div>
    )
}

export default NewPost;


