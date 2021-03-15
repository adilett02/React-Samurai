// import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post';

let postData = [
    { id: 1, postText: 'первый пост' },
    { id: 2, postText: 'второй пост' },
    { id: 3, postText: 'третий пост' },
    { id: 4, postText: 'четвертый пост' },
]

let postElements = postData.map(p => <Post message={p.postText} />)
const MyPosts = (props) => {
    return (
        <div className="MyPosts">
            <h4>My Posts</h4>
            <NewPost />
            {postElements}
        </div>
    )
}

export default MyPosts;