import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './DialogList.module.css';






const DialogList = (props) => {


    let dialogsData = [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Ksyusha" },
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);


    return (
        <div className={classes.dialog__list}>
            {dialogsElements}
            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
        </div>
    )
}

export default DialogList;