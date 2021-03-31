import React from 'react';

let Users = (props) => {
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
