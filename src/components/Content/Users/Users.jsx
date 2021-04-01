import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../../assets/images/user.png';

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        props.setUsers(response.data.items);
        console.log(response);
      });
    }

    // props.setUsers([
    //   {
    //     id: 1,
    //     followed: true,
    //     userPhoto: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
    //     userName: 'Димыч',
    //     userStatus: 'В отношениях...',
    //     userCountry: 'Russia',
    //     userCity: 'Mosscow',
    //   },
    //   {
    //     id: 2,
    //     followed: false,
    //     userPhoto: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
    //     userName: 'Ксюша',
    //     userStatus: 'В отношениях...',
    //     userCountry: 'Russia',
    //     userCity: 'Mosscow',
    //   },
    //   {
    //     id: 3,
    //     followed: true,
    //     userPhoto: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
    //     userName: 'Алексей',
    //     userStatus: 'В отношениях...',
    //     userCountry: 'Russia',
    //     userCity: 'Mosscow',
    //   },
    //   {
    //     id: 4,
    //     followed: false,
    //     userPhoto: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
    //     userName: 'Наташа',
    //     userStatus: 'В отношениях...',
    //     userCountry: 'Russia',
    //     userCity: 'Mosscow',
    //   },
    // ]);
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => {
        return (
          <div key={u.id} className="users">
            <div className="avatarFollow">
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
};

export default Users;
