import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './DialogList.module.css';






const DialogList = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);


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