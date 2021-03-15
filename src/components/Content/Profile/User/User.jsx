// import React from 'react';
import classes from './User.module.css';

const User = () => {
    return (
        <div className={classes.user}>
            <div className={classes.avatar}>
                <img src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYFFMybV41gNw3DSp3wH_ZiUFt49FdLBeaSZMk0iWKrLG513Bphi20AylfWPjkbgkoZP3P6DdNturF_Bt2ufQYb4Ap6Gps_jpXgHcNH3bI0ZEb8W.jpg?r=5ab" alt="" />
            </div>
            <div className="description">
                description about user
                    </div>
        </div>
    )
}

export default User;