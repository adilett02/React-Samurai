import React from 'react';
import classes from './NewPost.module.css';

const NewPost = (props) => {
   

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }
    return (
        <div className="new__post">
            <textarea ref={ newPostElement }></textarea>
            <button onClick={ addPost }> Отправить</button>
        </div>
    )
}

export default NewPost;