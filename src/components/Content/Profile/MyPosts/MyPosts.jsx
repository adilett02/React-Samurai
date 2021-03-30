// import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Posts/Post';




const MyPosts = (props) => {
    let state = props.store.getState();
    let postElements = state.profilePage.postData.map(p => <Post message={p.postText} />)
    return (
        <div className="MyPosts">
            <h4>My Posts</h4>
            <NewPostContainer store={props.store} />
            {postElements}
        </div>
    )
}

export default MyPosts;