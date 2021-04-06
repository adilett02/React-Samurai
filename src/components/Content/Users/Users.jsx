// import classes from '*.module.css';
import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../../assets/images/user.png';
import classes from '../../Content/Content.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPages(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    console.log(pagesCount);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((p) => (
            <button
              onClick={(e) => {
                this.onPageChanged(p);
              }}
              className={this.props.currentPage === p && classes.selectedPage}>
              {p}
            </button>
          ))}
          {/* <button className={classes.selectedPage}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button> */}
        </div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {this.props.users.map((u) => {
          return (
            <div key={u.id} className="users">
              <div className="avatarFollow">
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}>
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}>
                    unfollow
                  </button>
                )}
              </div>
              <div className="userInfo">
                <div>
                  <div> {u.name} </div>
                  <div> {u.userStatus} </div>
                </div>
                <div>
                  <div>{u.userCountry}</div>
                  <div>{u.userCity}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
