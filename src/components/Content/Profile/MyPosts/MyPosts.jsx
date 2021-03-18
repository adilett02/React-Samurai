// import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post';




const MyPosts = (props) => {
    let postElements = props.profilePage.postData.map(p => <Post message={p.postText} />)
    return (
        <div className="MyPosts">
            <h4>My Posts</h4>
            <NewPost newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
            {postElements}
        </div>
    )
}

export default MyPosts;