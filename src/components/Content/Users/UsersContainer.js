import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPages,
  setUsers,
  unfollow,
  setTotalUsersCount,
  toggleFetching,
} from '../../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import { getUsers } from '../../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPages(pageNumber);
    this.props.toggleFetching(true);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
    });
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPages,
  setTotalUsersCount,
  toggleFetching,
})(UsersContainer);
