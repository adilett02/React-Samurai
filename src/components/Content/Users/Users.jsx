import React from 'react';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
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
    ]);
  }

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id} className="users">
            <div className="avatarFollow">
              <img src={u.userPhoto} alt="" />
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
                <div> {u.userName} </div>
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
