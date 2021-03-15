import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../DialogList.module.css';



const DialogItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>
                {props.name}
            </NavLink>
        </div>
    )

}

export default DialogItem;