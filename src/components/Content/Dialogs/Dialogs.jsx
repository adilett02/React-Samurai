// import React from 'react';
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogList from './DialogList/DialogList';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogList />
            <Messages />
        </div>
    )
}

export default Dialogs;