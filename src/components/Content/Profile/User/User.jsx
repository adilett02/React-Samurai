// import React from 'react';
import classes from './User.module.css';

const User = () => {
    return (
        <div className={classes.user}>
            <div className={classes.avatar}>
                <img src="https://static.wikia.nocookie.net/avatar/images/1/1b/%D0%9A1%D1%8501_%D0%9A%D0%BE%D1%80%D1%80%D0%B0_%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.jpg/revision/latest?cb=20210101183923&path-prefix=ru" alt="" />
            </div>
            <div className="description">
                description about user
                    </div>
        </div>
    )
}

export default User;