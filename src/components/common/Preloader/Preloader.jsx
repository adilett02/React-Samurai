import React from 'react';
import classes from '../../Content/Content.module.css';

let Preloader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.spinner}></div>
    </div>
  );
};
export default Preloader;
