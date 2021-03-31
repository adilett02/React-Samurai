import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postElements = props.profilePage.postData.map((p) => (
    <Post message={p.postText} key={p.id} />
  ));
  return (
    <div className="MyPosts">
      <h4>My Posts</h4>
      <NewPost
        onPostChange={props.onPostChange}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
      />
      {postElements}
    </div>
  );
};

export default MyPosts;
