// import React from 'react';
import classes from './Messages.module.css';

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}

let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Im fine'},

]

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Message message={messageData[0].message} id={messageData[0].id} />
            <Message message={messageData[1].message} id={messageData[1].id} />
            <Message message={messageData[2].message} id={messageData[2].id} />
        </div>
    )
}

export default Messages;