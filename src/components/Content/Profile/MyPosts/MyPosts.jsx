// import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post';




const MyPosts = (props) => {
    let postElements = props.postData.map(p => <Post message={p.postText} />)
    return (
        <div className="MyPosts">
            <h4>My Posts</h4>
            <NewPost addPost={props.addPost} />
            {postElements}
        </div>
    )
}

export default MyPosts;