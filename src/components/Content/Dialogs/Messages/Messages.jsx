import React from 'react';
import classes from './Messages.module.css';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/state';

const Message = (props) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>

    )
}



const Messages = (props) => {
    let newMessageElement = React.createRef();
    
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }


    let sendMessage = () => {
        // let text = newMessageElement.current.value;
        props.dispatch(sendMessageActionCreator());
    }

    let messageElements = props.dialogPage.messageData.map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={classes.messages}>
            {messageElements}
            <textarea onChange={onMessageChange} value={props.dialogPage.newMessageText} ref={newMessageElement} placeholder="Введите сообщение"></textarea>
            <button onClick={sendMessage}>
                Отправить
            </button>
        </div>
    )
}

export default Messages;