import { connect } from 'react-redux';
import {
  followAC,
  setPagesAC,
  setUsersAC,
  unfollowAC,
  setTotalUsersCountAC,
} from '../../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.userData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPages: (pageNumber) => {
      dispatch(setPagesAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
