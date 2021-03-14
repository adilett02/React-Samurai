// import React from 'react';
import classes from './Messages.module.css';

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Message message='Hi' />
            <Message message='How are you?' />
            <Message message='Im fine' />
        </div>
    )
}

export default Messages;