// import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './Me.module.css';

const Me = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.user}>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div className="description">{props.profile.aboutMe}</div>
      <div>Ищет работу: {props.profile.lookingForAJob === true ? 'Да' : 'Нет'} </div>
    </div>
  );
};

export default Me;
