import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogList.module.css';



const DialogItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>
                {props.name}
            </NavLink>
        </div>
    )

}


const DialogList = () => {
    return (
        <div className={classes.dialog__list}>
            <DialogItem name='Ivan' id='1' />
            <DialogItem name='Petya' id='2' />
            <DialogItem name='Ksyusha' id='3' />
        </div>
    )
}

export default DialogList;