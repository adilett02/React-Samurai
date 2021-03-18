import React from 'react';
import classes from './NewPost.module.css';

const NewPost = (props) => {


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
   

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        // props.updateNewPostText('');
    }
    return (
        <div className="new__post">
            <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}></textarea>
            <button onClick={ addPost }> Отправить</button>
        </div>
    )
}

export default NewPost;