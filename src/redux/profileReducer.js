const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
  postData: [
    { id: 1, postText: 'первый пост' },
    { id: 2, postText: 'второй пост' },
    { id: 3, postText: 'третий пост' },
    { id: 4, postText: 'четвертый пост' },
  ],
  newPostText: 'Just text',
  profile: null,
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [...state.postData, { id: 5, postText: state.newPostText }],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export default profileReducer;
