// import React from 'react';
import classes from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    let state = props.store.getState();
    // let dialogsData = [
    //     { id: 1, name: "Ivan" },
    //     { id: 2, name: "Petya" },
    //     { id: 3, name: "Ksyusha" },
    // ]
    return (
        <div className={classes.dialogs}>
            <DialogList dialogsData={state.dialogPage.dialogsData} />
            <MessagesContainer store = {props.store} />
        </div>
    )
}

export default Dialogs;