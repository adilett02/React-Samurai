import React from 'react';
import classes from './Messages.module.css';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/dialogReducer';
import Messages from './Messages';




const MessagesContainer = (props) => {
    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }


    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return ( <Messages onMessageChange={onMessageChange} sendMessage={sendMessage} newMessageElement={newMessageElement} state={props.store.getState() } />)
}

export default MessagesContainer;