const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  userData: [
    {
      id: 1,
      followed: true,
      userPhoto: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
      userName: 'Димыч',
      userStatus: 'В отношениях...',
      userCountry: 'Russia',
      userCity: 'Mosscow',
    },
    {
      id: 2,
      followed: false,
      userPhoto: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
      userName: 'Ксюша',
      userStatus: 'В отношениях...',
      userCountry: 'Russia',
      userCity: 'Mosscow',
    },
    {
      id: 3,
      followed: true,
      userPhoto: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
      userName: 'Алексей',
      userStatus: 'В отношениях...',
      userCountry: 'Russia',
      userCity: 'Mosscow',
    },
    {
      id: 4,
      followed: false,
      userPhoto: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
      userName: 'Наташа',
      userStatus: 'В отношениях...',
      userCountry: 'Russia',
      userCity: 'Mosscow',
    },
  ],
  //   newPostText: 'Just text',
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        userData: state.userData.map((u) => {
          if (u.id == action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        userData: state.userData.map((u) => {
          if (u.id == action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, userData: [...state.userData, ...action.users] };
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default userReducer;
