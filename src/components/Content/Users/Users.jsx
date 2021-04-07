import React from 'react';
import classes from '../../Content/Content.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/Preloader/Preloader';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
              props.onPageChanged(p);
            }}
            className={props.currentPage === p && classes.selectedPage}>
            {p}
          </button>
        ))}
      </div>
      {props.isFetching ? <Preloader /> : null}
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
