// import React from 'react';
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogList from './DialogList/DialogList';

const Dialogs = (props) => {
    // let dialogsData = [
    //     { id: 1, name: "Ivan" },
    //     { id: 2, name: "Petya" },
    //     { id: 3, name: "Ksyusha" },
    // ]
    return (
        <div className={classes.dialogs}>
            <DialogList dialogsData={props.dialogPage.dialogsData} />
            <Messages messageData={props.dialogPage.messageData} />
        </div>
    )
}

export default Dialogs;