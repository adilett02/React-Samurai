import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../../assets/images/user.png';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.setUsers(response.data.items);
      console.log(response);
    });
  }

  render() {
    return (
      <div>
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
