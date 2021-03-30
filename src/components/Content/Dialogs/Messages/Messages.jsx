import React from 'react';
import classes from './Messages.module.css';

const Message = (props) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>

    )
}



const Messages = (props) => {

    let messageElements = props.state.dialogPage.messageData.map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={classes.messages}>
            {messageElements}
            <textarea onChange={props.onMessageChange} value={props.state.dialogPage.newMessageText} ref={props.newMessageElement} placeholder="Введите сообщение"></textarea>
            <button onClick={props.sendMessage}>
                Отправить
            </button>
        </div>
    )
}

export default Messages;