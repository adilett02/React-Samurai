import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://e7.pngegg.com/pngimages/504/313/png-clipart-facebook-logo-social-media-badge-social-network-influencer-marketing-facebook-icon-blue-trademark.png"
        alt=""
      />
      <div className={classes.loginBlock}>
        {props.isAuth == true ? props.login : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
