// import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './Me.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Me = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.user}>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <ProfileStatus status={"Статус"} profile={props.profile} />
    </div>
  );
};

export default Me;
