import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.userData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;