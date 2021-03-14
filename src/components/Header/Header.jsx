import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://e7.pngegg.com/pngimages/504/313/png-clipart-facebook-logo-social-media-badge-social-network-influencer-marketing-facebook-icon-blue-trademark.png" alt="" />
        </header>
    );
}

export default Header;