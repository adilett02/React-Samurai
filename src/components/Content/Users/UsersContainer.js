import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getUsers } from '../../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  debugger;
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          isFetching={this.props.isFetching}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followinginProgress={this.props.followinginProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.userData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followinginProgress: state.usersPage.followinginProgress,
  };
};


let AuthRedirectComponent = withAuthRedirect(UsersContainer)
export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
})(AuthRedirectComponent);
