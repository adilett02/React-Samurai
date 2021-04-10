import React from 'react';
import classes from '../../Content/Content.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
              </NavLink>

              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "6db8aa30-ad68-459c-af84-8ce70ca641e9"
                        }
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}>
                  unfollow
                </button>
              ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "6db8aa30-ad68-459c-af84-8ce70ca641e9"
                          }
                        })
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
                    }}>
                    follow
                  </button>
                )}
            </div>
            <div className="userInfo">
              <div>
                <div> {u.name} </div>
                <div> {u.status} </div>
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
