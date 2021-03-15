// import React from 'react';
import classes from './Messages.module.css';

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}



const Messages = (props) => {

    let messageElements = props.messageData.map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={classes.messages}>
            {messageElements}
            {/* <Message message={messageData[0].message} id={messageData[0].id} />
            <Message message={messageData[1].message} id={messageData[1].id} />
            <Message message={messageData[2].message} id={messageData[2].id} /> */}
        </div>
    )
}

export default Messages;