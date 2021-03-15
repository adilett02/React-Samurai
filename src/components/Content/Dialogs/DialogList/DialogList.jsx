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


    let dialogsData = [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Ksyusha" },
    ]


    return (
        <div className={classes.dialog__list}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        </div>
    )
}

export default DialogList;