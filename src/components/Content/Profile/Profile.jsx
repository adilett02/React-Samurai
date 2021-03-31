import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import User from './User/User';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <img
        className={classes.img}
        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
        alt=""
      />
      <User />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
