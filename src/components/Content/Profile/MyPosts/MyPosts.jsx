// import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post';

const MyPosts = (props) => {
    return (
        <div className="MyPosts">
            <h4>My Posts</h4>
            <NewPost />
            <Post message="первый пост" />
            <Post message="второй пост" />
            <Post message="третий пост" />
            <Post message="четвертый пост" />
        </div>
    )
}

export default MyPosts;