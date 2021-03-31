import React from 'react';
import classes from './NewPost.module.css';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../../../../redux/profileReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

// const NewPostContainer2 = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         return (
//           <NewPost
//             addPost={addPost}
//             onPostChange={onPostChange}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
